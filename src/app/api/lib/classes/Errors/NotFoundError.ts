import HTTPStatusError from './HTTPStatusError';

class NotFoundError extends HTTPStatusError {
  constructor(public message: string) {
    super(message, 404);
  }
}

export default NotFoundError;
