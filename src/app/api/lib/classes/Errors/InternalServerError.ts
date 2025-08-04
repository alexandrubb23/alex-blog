import Error from "./HttpError";

class InternalServerError extends Error {
  constructor(message = "Internal Server Error.") {
    super(`500: ${message}`, 500);
  }
}

export default InternalServerError;
