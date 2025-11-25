import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, FROM_EMAIL } = process.env;

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !FROM_EMAIL) {
  throw new Error("Email environment variables are missing!");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(EMAIL_PORT, 10),
      secure: parseInt(EMAIL_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: FROM_EMAIL,
      to: email,
      subject: 'Atlas Protocol Whitelist Confirmation ✅',
      html: `
        <div style="font-family: system-ui, sans-serif; text-align: center; padding: 2rem;">
          <img src="cid:atlasPlaceholder" alt="Atlas Protocol" width="200" style="margin-bottom: 1rem;" />
          <h1 style="color: #1E40AF;">Welcome to Atlas Protocol!</h1>
          <p style="margin: 1rem 0; font-size: 1rem; color: #374151;">
            You have been successfully added to our whitelist.
          </p>
          <p style="color: #6B7280;">Stay tuned for updates and the upcoming presale.</p>
        </div>
      `,
      attachments: [
        {
          filename: 'atlas-placeholder.png',
          path: './public/atlas-placeholder.png', // make sure the image exists here
          cid: 'atlasPlaceholder', // same as in the HTML img src
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: `Email ${email} successfully added to whitelist!` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
