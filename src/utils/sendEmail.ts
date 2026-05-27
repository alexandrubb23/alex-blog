import { Resend } from "resend";

import { env } from "@/env";
import { AUTHOR } from "@/app/constants";

const resend = new Resend(env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");

export const sendEmail = async (from: string, message: string) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: AUTHOR.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Alex Blog",
    html: `<p>Email from <strong>${escapeHtml(from)}</strong></p><p>${escapeHtml(message)}</p>`,
    text: `Email from ${from}\n\n${message}`,
  });

  if (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Failed to send email`);
  }

  return data;
};
