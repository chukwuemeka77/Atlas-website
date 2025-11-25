import type { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri!);

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    await client.connect();
    const db = client.db("atlas");
    const whitelist = db.collection("whitelist");

    const existing = await whitelist.findOne({ email });
    if (existing) return res.status(200).json({ message: "Already whitelisted" });

    await whitelist.insertOne({ email, date: new Date() });

    // -----------------------------
    // Send confirmation email
    // -----------------------------
    const msg = {
      to: email,
      from: process.env.WHITELIST_EMAIL_FROM!, // e.g. "noreply@atlasprotocol.com"
      subject: "Whitelist Confirmation – Atlas Protocol",
      text: `Hi there!\n\nYou have been successfully added to the Atlas whitelist. Stay tuned for the presale launch!\n\n– Atlas Team`,
      html: `<p>Hi there!</p><p>You have been successfully added to the <strong>Atlas whitelist</strong>. Stay tuned for the presale launch!</p><p>– Atlas Team</p>`,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Whitelisted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
}
