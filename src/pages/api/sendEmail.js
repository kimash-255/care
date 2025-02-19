import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    // Configure the transporter with SMTP credentials from .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true", // Use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email HTML Styling
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="background-color: #f4f4f4; padding: 10px; text-align: center; border-radius: 5px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 10px; background-color: #fafafa; border-radius: 5px; font-style: italic;">
          ${message}
        </div>
        <hr />
        <p style="text-align: center; font-size: 12px; color: #888;">Warm Touch Homes | Hillsboro, OR | Contact: 503-747-5544</p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Warm Touch Homes" <${process.env.SMTP_USER}>`,
      to: "info@softleek.com", // Multiple recipients
      subject: `New Contact Form Message: ${subject}`,
      html: emailContent, // Styled HTML content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      data: info,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}
