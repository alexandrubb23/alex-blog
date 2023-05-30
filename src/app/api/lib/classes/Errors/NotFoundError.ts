import HTTPStatusError from './HTTPStatusError';

class NotFoundError extends HTTPStatusError {
  constructor(public message = 'Not Found.') {
    super(`404: ${message}`, 404);
  }
}

export default NotFoundError;
