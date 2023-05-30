import HTTPStatusError from './HTTPStatusError';

class InternalServerError extends HTTPStatusError {
  constructor(message = 'Internal Server Error.') {
    super(`500: ${message}`, 500);
  }
}

export default InternalServerError;
