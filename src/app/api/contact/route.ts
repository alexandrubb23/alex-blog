import z from "zod";

import { handleRequestAndRespond } from "../lib/services/handleEntityRequestService";
import { validateRequest } from "../lib/validators/validate-request";
import { sendEmail } from "@/utils/sendEmail";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});

export const POST = async (req: Request) => {
  const handler = async () => {
    const body = await req.json();
    const result = validateRequest(schema, body);

    await sendEmail(result.email, result.message);

    return { success: true };
  };

  return handleRequestAndRespond(handler);
};
