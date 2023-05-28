import CustomError from './CustomError';

class NotFoundError extends CustomError {
  constructor(public message: string) {
    super(message, 404);
  }
}

export default NotFoundError;
