import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  service: string;
  message: string;
  botcheck?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[\d\s()-]{7,20}$/;

function validatePayload(payload: ContactPayload): string | null {
  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const businessName = payload.businessName?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }

  if (!phonePattern.test(phone)) {
    return "Please enter a valid phone number.";
  }

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  if (businessName.length < 2) {
    return "Please enter your business name.";
  }

  if (!service) {
    return "Please select a service.";
  }

  if (message.length < 5) {
    return "Please enter a message.";
  }

  return null;
}

function getGmailConfig() {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const recipientEmail =
    process.env.CONTACT_RECIPIENT_EMAIL?.trim() || "theadslogic@gmail.com";

  return { gmailUser, gmailAppPassword, recipientEmail };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactEmailHtml(payload: ContactPayload): string {
  const name = escapeHtml(payload.name);
  const phone = escapeHtml(payload.phone);
  const email = escapeHtml(payload.email);
  const businessName = escapeHtml(payload.businessName);
  const service = escapeHtml(payload.service);
  const message = escapeHtml(payload.message).replaceAll("\n", "<br />");
  const submittedAt = new Date().toLocaleString("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:Arial,Helvetica,sans-serif;color:#ededed;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0f0f0f;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background-color:#171717;border:1px solid rgba(255,138,31,0.18);border-radius:20px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 24px;background:linear-gradient(135deg,#ff6b00 0%,#ff8a1f 100%);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.85);">AdsLogic</p>
                    <h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:700;color:#ffffff;">New Contact Inquiry</h1>
                    <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.92);">A new message was submitted from your website contact form.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 8px;">
              <span style="display:inline-block;padding:8px 14px;border-radius:999px;background-color:rgba(255,107,0,0.14);border:1px solid rgba(255,107,0,0.35);color:#ffb066;font-size:13px;font-weight:700;">${service}</span>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 32px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                <tr>
                  <td style="padding:16px 18px;background-color:#1b1b1b;border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff8a1f;">Name</p>
                    <p style="margin:0;font-size:16px;line-height:1.5;color:#ffffff;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 18px;background-color:#1b1b1b;border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff8a1f;">Phone</p>
                    <p style="margin:0;font-size:16px;line-height:1.5;color:#ffffff;">${phone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 18px;background-color:#1b1b1b;border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff8a1f;">Email</p>
                    <p style="margin:0;font-size:16px;line-height:1.5;">
                      <a href="mailto:${email}" style="color:#ffb066;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 18px;background-color:#1b1b1b;border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff8a1f;">Business Name</p>
                    <p style="margin:0;font-size:16px;line-height:1.5;color:#ffffff;">${businessName}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#1b1b1b;border:1px solid rgba(255,138,31,0.22);border-radius:14px;">
                <tr>
                  <td style="padding:18px 18px 10px;">
                    <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ff8a1f;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#f3f3f3;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:14px 16px;background-color:rgba(255,107,0,0.08);border:1px solid rgba(255,107,0,0.18);border-radius:12px;">
                    <p style="margin:0;font-size:13px;line-height:1.6;color:#d7d7d7;">
                      Reply directly to this email to respond to <strong style="color:#ffffff;">${name}</strong>.
                      Their email is set as the reply-to address.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 32px 24px;border-top:1px solid rgba(255,255,255,0.08);background-color:#141414;">
              <p style="margin:0 0 6px;font-size:12px;line-height:1.5;color:#9ca3af;">Submitted on ${submittedAt}</p>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#9ca3af;">AdsLogic Contact Form · Website Inquiry</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactEmailText(payload: ContactPayload): string {
  return [
    "ADSLOGIC - NEW CONTACT INQUIRY",
    "================================",
    "",
    `Service: ${payload.service}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Business Name: ${payload.businessName}`,
    "",
    "Message:",
    payload.message,
    "",
    `Reply to this email to respond to ${payload.name}.`,
  ].join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body.botcheck) {
      return NextResponse.json({ success: true });
    }

    const validationError = validatePayload(body);

    if (validationError) {
      return NextResponse.json({ success: false, message: validationError }, { status: 400 });
    }

    const { gmailUser, gmailAppPassword, recipientEmail } = getGmailConfig();

    if (!gmailUser || !gmailAppPassword || !recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local.",
        },
        { status: 500 },
      );
    }

    const payload: ContactPayload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email.trim(),
      businessName: body.businessName.trim(),
      service: body.service.trim(),
      message: body.message.trim(),
    };

    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.default.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"AdsLogic Contact Form" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: payload.email,
      subject: `New Contact Form Submission - ${payload.service}`,
      text: buildContactEmailText(payload),
      html: buildContactEmailHtml(payload),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    const isAuthError =
      error instanceof Error &&
      (error.message.includes("Invalid login") ||
        error.message.includes("BadCredentials") ||
        (error as { code?: string }).code === "EAUTH");

    const message = isAuthError
      ? "Gmail app password is incorrect or expired. Update GMAIL_APP_PASSWORD in .env.local with your latest App Password, then restart the server."
      : "Unable to send your message. Please try again later.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
