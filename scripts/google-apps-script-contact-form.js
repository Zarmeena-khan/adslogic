/**
 * AdsLogic Contact Form - Google Apps Script
 *
 * ONE-TIME SETUP (2 minutes):
 * 1. Open https://script.google.com → New project
 * 2. Delete default code, paste ALL of this file
 * 3. Change RECIPIENT_EMAIL below if needed
 * 4. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL into .env.local as GOOGLE_APPS_SCRIPT_URL
 */

const RECIPIENT_EMAIL = "theadlogic@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.botcheck) {
      return jsonResponse({ success: true });
    }

    const name = String(data.name || "").trim();
    const phone = String(data.phone || "").trim();
    const email = String(data.email || "").trim();
    const businessName = String(data.businessName || "").trim();
    const service = String(data.service || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !phone || !email || !businessName || !service || !message) {
      return jsonResponse({ success: false, message: "All fields are required." }, 400);
    }

    const subject = "New Contact Form Submission - " + service;
    const body =
      "New contact form submission from AdsLogic website\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Business Name: " + businessName + "\n" +
      "Service: " + service + "\n\n" +
      "Message:\n" + message;

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: subject,
      body: body,
    });

    return jsonResponse({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    return jsonResponse(
      { success: false, message: "Failed to send email: " + error.message },
      500,
    );
  }
}

function jsonResponse(payload, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );

  if (statusCode) {
    // Apps Script doesn't support HTTP status codes directly in doPost,
    // but the JSON payload is enough for our API route.
  }

  return output;
}
