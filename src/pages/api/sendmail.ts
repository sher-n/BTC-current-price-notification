// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { MAILER_USER, MAILER_PASS } = process.env;
  const { message, to } = req.body;
  try {
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: MAILER_USER,
        pass: MAILER_PASS,
      },
    });
    await transporter.sendMail({
      from: `BTC current price notification`,
      to, // use ,(Comma) for multiple recipients
      subject: message,
    });

    res.status(200).json({ name: "sfsdf Doe" });
  } catch (error) {
    res.status(400).json({ name: "sfsdf Doe" });
  }
}
