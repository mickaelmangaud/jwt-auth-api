import { BaseError } from './baseError';
import { StatusCodes } from 'http-status-codes';

export class UnauthorizedError extends BaseError {
  constructor(message, detailedMessages = [], code = 'Unauthorized') {
    super(message, detailedMessages, code, StatusCodes.UNAUTHORIZED);
  }
}
