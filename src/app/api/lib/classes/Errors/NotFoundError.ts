import Error from "./HttpError";

class NotFoundError extends Error {
  constructor(public message = "Not Found.") {
    super(`404: ${message}`, 404);
  }
}

export default NotFoundError;
