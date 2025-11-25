// api/whitelist.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

const MONGO = process.env.MONGODB_URI!;
const EMAIL = process.env.EMAIL!;
const PASS = process.env.EMAIL_PASSWORD!;

const WhitelistSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
});

const Whitelist =
  mongoose.models.Whitelist || mongoose.model("Whitelist", WhitelistSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  await mongoose.connect(MONGO);

  const exists = await Whitelist.findOne({ email });
  if (exists) return res.status(400).json({ error: "Already whitelisted" });

  await Whitelist.create({ email });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL, pass: PASS },
  });

  await transporter.sendMail({
    from: `"Atlas Protocol" <${EMAIL}>`,
    to: email,
    subject: "You are Whitelisted!",
    html: `
      <div style="font-family:sans-serif;">
        <h2>Welcome to Atlas Protocol!</h2>
        <p>You have been successfully added to the whitelist.</p>
        <img src="https://YOUR_DOMAIN/atlas-card.png" width="350"/>
      </div>
    `,
  });

  res.status(200).json({ success: true });
}
