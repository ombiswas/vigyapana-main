import nodemailer from 'nodemailer';
import { env } from './env';

export const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS
  }
});

export const sendMail = async (options: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<boolean> => {
  try {
    if (!env.SMTP_USER || !env.SMTP_PASS) {
      console.warn('[Mailer] SMTP Credentials missing. Email sending skipped in dev.');
      return true;
    }

    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text
    });

    console.log(`[Mailer] Email sent successfully to ${options.to}. MessageId: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error('[Mailer] Email Dispatch Failed:', error);
    return false;
  }
};
