import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email function
export const sendEmail = async ({ email, subject, message, html }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text: message,
      html: html || message,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Email templates
export const emailTemplates = {
  welcome: (name) => ({
    subject: "Welcome to ElectroStore!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Welcome to ElectroStore!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for joining ElectroStore! We're excited to have you as a customer.</p>
        <p>You can now browse our amazing collection of electronics and make your first purchase.</p>
        <a href="${process.env.FRONTEND_URL}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Start Shopping</a>
      </div>
    `,
  }),

  orderConfirmation: (order) => ({
    subject: `Order Confirmation - ${order.orderNumber}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Order Confirmation</h1>
        <p>Thank you for your order!</p>
        <p><strong>Order Number:</strong> ${order.orderNumber}</p>
        <p><strong>Total:</strong> $${order.totalPrice.toFixed(2)}</p>
        <p>We'll send you another email when your order ships.</p>
      </div>
    `,
  }),

  passwordReset: (resetLink) => ({
    subject: "Password Reset Request",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Password Reset</h1>
        <p>You requested a password reset for your ElectroStore account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}" style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      </div>
    `,
  }),
};
