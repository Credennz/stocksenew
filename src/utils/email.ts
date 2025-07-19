import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hello@stockse.in',
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: 'hello@stockse.in',
    to,
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendConfirmationEmail = async (to: string, name: string, type: string) => {
  const subject = `Thank you for your ${type} request`;
  const html = `
    <h1>Thank you, ${name}!</h1>
    <p>We have received your ${type} request and will get back to you within 24-48 hours.</p>
    <p>Best regards,<br>StockSe Team</p>
  `;

  return sendEmail(to, subject, html);
};

export const sendNotificationEmail = async (formData: any, type: string) => {
  const subject = `New ${type} Request`;
  const html = `
    <h2>New ${type} Request Details:</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    ${Object.entries(formData)
      .filter(([key]) => !['name', 'email', 'phone'].includes(key))
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('')}
  `;

  return sendEmail('hello@stockse.in', subject, html);
};