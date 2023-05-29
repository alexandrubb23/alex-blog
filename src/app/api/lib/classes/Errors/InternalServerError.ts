import HTTPStatusError from './HTTPStatusError';

class InternalServerError extends HTTPStatusError {
  constructor(message: string) {
    super(message, 500);
  }
}

export default InternalServerError;
