import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_EMAIL = process.env.SITE_EMAIL || "hello@hassanalimehdi.dev";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Send notification to Hassan
    await resend.emails.send({
      from: `Portfolio <${SITE_EMAIL}>`,
      to: [SITE_EMAIL, "hassanalimehdi30@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 560px;">
          <h2 style="color: #c44a26;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 1.2rem 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    // Send confirmation to the person who filled the form
    await resend.emails.send({
      from: `Hassan Ali Mehdi <${SITE_EMAIL}>`,
      to: email,
      subject: "Got your message — Hassan",
      html: `
        <div style="font-family: sans-serif; max-width: 560px;">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for reaching out. I've received your message and will get back to you soon.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 1.2rem 0;" />
          <p style="color: #888; font-size: 0.9rem;">Your message:</p>
          <p style="white-space: pre-wrap; color: #555;">${escapeHtml(message)}</p>
          <br />
          <p>— Hassan</p>
          <p style="color: #c44a26; font-size: 0.85rem;">Codantrix Labs</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
