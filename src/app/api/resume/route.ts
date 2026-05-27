import { handleRequestAndRespond } from "../lib/services/handleEntityRequestService";

// TODO: Implement resume generation with AI.
// When a new experience is added and an employer provides a valid admin-generated
// password, regenerate the resume via AI and return a download link or send it
// by email. Otherwise reuse the previously generated version.
export const POST = async (_req: Request) => {
  const handler = async (): Promise<never> => {
    throw new Error("Incorrect password.");
  };

  return handleRequestAndRespond(handler);
};
