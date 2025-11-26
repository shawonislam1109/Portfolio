import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // your app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `New Message From Portfolio — ${name}`,
      text: message,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Mail Error:", error);
    return NextResponse.json({ error: "Error sending mail" }, { status: 500 });
  }
}
