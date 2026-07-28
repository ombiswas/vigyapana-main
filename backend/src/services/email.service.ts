import { sendMail } from '../config/mailer';
import { env } from '../config/env';

export const sendContactNotificationEmail = async (data: {
  fullName: string;
  email: string;
  phone: string;
  serviceRequested: string;
  message: string;
}) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #4F46E5;">New Contact Submission — Vigyapana Services</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service Requested:</strong> ${data.serviceRequested}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f4f4f5; padding: 12px; border-left: 4px solid #4F46E5;">${data.message}</blockquote>
      <hr />
      <p style="font-size: 12px; color: #71717a;">This is an automated notification from Vigyapana Platform Engine.</p>
    </div>
  `;

  return await sendMail({
    to: env.ADMIN_NOTIFICATION_EMAIL,
    subject: `⚡ New Lead: ${data.fullName} (${data.serviceRequested})`,
    html: htmlContent
  });
};

export const sendLeadConfirmationEmail = async (email: string, name: string) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #4F46E5;">Thank You for Contacting Vigyapana Services!</h2>
      <p>Dear ${name},</p>
      <p>We have received your inquiry. Our digital strategy team will analyze your request and get back to you within 24 business hours.</p>
      <p>Best regards,<br/><strong>Team Vigyapana Services Pvt. Ltd.</strong></p>
    </div>
  `;

  return await sendMail({
    to: email,
    subject: `We received your request — Vigyapana Services`,
    html: htmlContent
  });
};
