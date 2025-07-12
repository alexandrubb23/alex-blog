import z from "zod";
import { handleRequestAndRespond } from "../lib/services/handleEntityRequestService";
import { validateRequest } from "../lib/validators/validate-request";

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
    validateRequest(schema, body);
    return {
      message: "Thank you for your message! I will get back to you soon.",
    };
  };

  return handleRequestAndRespond(handler);
};
