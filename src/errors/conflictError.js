import { BaseError } from './baseError';
import { StatusCodes } from 'http-status-codes';

export class ConflictError extends BaseError {
  constructor(message, detailedMessages = [], code = 'Already Exists') {
    super(message, detailedMessages, code, StatusCodes.CONFLICT);
  }
}
