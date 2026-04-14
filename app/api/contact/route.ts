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

    const SITE_URL = "https://hassanalimehdi.dev";

    // Send notification to Hassan
    await resend.emails.send({
      from: `Portfolio <${SITE_EMAIL}>`,
      to: [SITE_EMAIL, "hassanalimehdi30@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#fff5ee;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff5ee;">
  <tr><td align="center" style="padding:40px 20px;">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

      <!-- Logo header -->
      <tr><td style="padding:0 0 32px;">
        <a href="${SITE_URL}" style="text-decoration:none;font-size:22px;font-weight:700;color:#2a1810;letter-spacing:-0.02em;">Hassan<span style="color:#c44a26;">.</span></a>
      </td></tr>

      <!-- Card -->
      <tr><td style="background-color:#ffffff;border-radius:16px;border:1px solid #f0ddd4;overflow:hidden;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

          <!-- Accent bar -->
          <tr><td style="height:4px;background-color:#c44a26;font-size:0;line-height:0;">&nbsp;</td></tr>

          <!-- Label -->
          <tr><td style="padding:28px 32px 0;">
            <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:2.5px;color:#c44a26;font-weight:600;">New Contact Submission</p>
          </td></tr>

          <!-- Title -->
          <tr><td style="padding:12px 32px 24px;">
            <h2 style="margin:0;font-size:22px;font-weight:700;color:#2a1810;">Message from ${escapeHtml(name)}</h2>
          </td></tr>

          <!-- Name field -->
          <tr><td style="padding:0 32px 12px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf5f0;border-radius:12px;">
              <tr><td style="padding:16px 20px;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8a6a58;font-weight:600;">Name</p>
                <p style="margin:0;font-size:16px;color:#2a1810;">${escapeHtml(name)}</p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Email field -->
          <tr><td style="padding:0 32px 12px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf5f0;border-radius:12px;">
              <tr><td style="padding:16px 20px;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8a6a58;font-weight:600;">Email</p>
                <p style="margin:0;font-size:16px;color:#2a1810;"><a href="mailto:${escapeHtml(email)}" style="color:#c44a26;text-decoration:none;">${escapeHtml(email)}</a></p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Message field -->
          <tr><td style="padding:0 32px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf5f0;border-radius:12px;">
              <tr><td style="padding:16px 20px;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8a6a58;font-weight:600;">Message</p>
                <p style="margin:0;font-size:15px;color:#2a1810;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Reply button -->
          <tr><td style="padding:0 32px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr><td style="background-color:#c44a26;border-radius:10px;">
                <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:12px 28px;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;">Reply to ${escapeHtml(name)}</a>
              </td></tr>
            </table>
          </td></tr>

        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:28px 0 0;text-align:center;">
        <p style="margin:0 0 8px;font-size:12px;color:#8a6a58;">
          <a href="${SITE_URL}" style="color:#c44a26;text-decoration:none;">Website</a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;
          <a href="${SITE_URL}#build" style="color:#c44a26;text-decoration:none;">Work</a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;
          <a href="${SITE_URL}#contact" style="color:#c44a26;text-decoration:none;">Contact</a>
        </p>
        <p style="margin:0;font-size:11px;color:#b89a8a;">&copy; 2026 Hassan Ali Mehdi &middot; Codantrix Labs</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
    });

    // Send confirmation to the person who filled the form
    await resend.emails.send({
      from: `Hassan Ali Mehdi <${SITE_EMAIL}>`,
      to: email,
      subject: "Got your message — Hassan",
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#fff5ee;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff5ee;">
  <tr><td align="center" style="padding:40px 20px;">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

      <!-- Logo header -->
      <tr><td style="padding:0 0 32px;">
        <a href="${SITE_URL}" style="text-decoration:none;font-size:22px;font-weight:700;color:#2a1810;letter-spacing:-0.02em;">Hassan<span style="color:#c44a26;">.</span></a>
      </td></tr>

      <!-- Card -->
      <tr><td style="background-color:#ffffff;border-radius:16px;border:1px solid #f0ddd4;overflow:hidden;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

          <!-- Accent bar -->
          <tr><td style="height:4px;background-color:#c44a26;font-size:0;line-height:0;">&nbsp;</td></tr>

          <!-- Greeting -->
          <tr><td style="padding:28px 32px 0;">
            <p style="margin:0;font-size:18px;color:#2a1810;font-weight:600;">Hi ${escapeHtml(name)},</p>
          </td></tr>

          <!-- Body text -->
          <tr><td style="padding:14px 32px 24px;">
            <p style="margin:0;font-size:15px;color:#5a3a2a;line-height:1.7;">Thanks for reaching out through my portfolio. I've received your message and will get back to you soon.</p>
          </td></tr>

          <!-- Message quote -->
          <tr><td style="padding:0 32px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf5f0;border-radius:12px;border-left:3px solid #c44a26;">
              <tr><td style="padding:16px 20px;">
                <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8a6a58;font-weight:600;">Your message</p>
                <p style="margin:0;font-size:15px;color:#5a3a2a;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Signature -->
          <tr><td style="padding:0 32px 28px;">
            <p style="margin:0 0 2px;font-size:15px;color:#2a1810;font-weight:600;">&mdash; Hassan Ali Mehdi</p>
            <p style="margin:0;font-size:13px;color:#c44a26;font-weight:600;">Founder, Codantrix Labs</p>
          </td></tr>

        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:28px 0 0;text-align:center;">
        <p style="margin:0 0 8px;font-size:12px;color:#8a6a58;">
          <a href="${SITE_URL}" style="color:#c44a26;text-decoration:none;">Website</a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;
          <a href="${SITE_URL}#build" style="color:#c44a26;text-decoration:none;">Work</a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;
          <a href="${SITE_URL}#contact" style="color:#c44a26;text-decoration:none;">Contact</a>
        </p>
        <p style="margin:0;font-size:11px;color:#b89a8a;">&copy; 2026 Hassan Ali Mehdi &middot; Codantrix Labs</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
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
