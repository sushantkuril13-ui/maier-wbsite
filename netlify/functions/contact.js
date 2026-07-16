import nodemailer from 'nodemailer';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    };
  }

  try {
    const { fullName, companyName, email, phoneNumber, city, country, message } = JSON.parse(event.body || '{}');

    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          message: 'Please fill in all required fields (Full Name, Email, Message).'
        })
      };
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          message: 'Email service is not configured on the server.'
        })
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const safeFullName = escapeHtml(fullName);
    const safeCompanyName = companyName ? escapeHtml(companyName) : 'N/A';
    const safeEmail = escapeHtml(email);
    const safePhoneNumber = phoneNumber ? escapeHtml(phoneNumber) : 'N/A';
    const safeCity = city ? escapeHtml(city) : 'N/A';
    const safeCountry = country ? escapeHtml(country) : 'N/A';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sushant.k22@iiits.in',
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Company Name:</strong> ${safeCompanyName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Phone Number:</strong> ${safePhoneNumber}</p>
        <p><strong>City:</strong> ${safeCity}</p>
        <p><strong>Country:</strong> ${safeCountry}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr>
        <p><small>This email was sent from the Rajshi Engineers contact form on ${new Date().toLocaleString()}</small></p>
      `
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Rajshi Engineers',
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${safeFullName},</p>
        <p>We have received your message and appreciate your interest in Rajshi Engineers. Our team will review your inquiry and get back to you as soon as possible.</p>
        <h3>Your Submitted Information:</h3>
        <p><strong>Name:</strong> ${safeFullName}</p>
        <p><strong>Company:</strong> ${safeCompanyName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhoneNumber}</p>
        <p><strong>City:</strong> ${safeCity}</p>
        <p><strong>Country:</strong> ${safeCountry}</p>
        <h3>Your Message:</h3>
        <p>${safeMessage}</p>
        <hr>
        <p>Best regards,<br><strong>Rajshi Engineers Team</strong></p>
        <p>
          <strong>Contact Details:</strong><br>
          2, B.H.E.L. Industrial Estate, Ancillary Area<br>
          P.O. B.H.E.L., Khailar, Jhansi<br>
          Uttar Pradesh, India. 284129<br>
          Phone: +91 – 9415113335 / 0510 – 2770090<br>
          Email: rajshijhs@yahoo.com
        </p>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully!'
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.'
      })
    };
  }
};