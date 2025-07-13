import { Resend } from "resend";

import { env } from "@/env";
import { AUTHOR } from "@/app/constants";

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async (from: string, message: string) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: AUTHOR.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Alex Blog",
    html: `</p>Email from <strong>${from}</strong> with message: <p>${message}</p>`,
  });

  if (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Failed to send email`);
  }

  return data;
};
