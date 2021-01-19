import { BaseError } from './baseError';
import { StatusCodes } from 'http-status-codes';

export class InvalidPayloadError extends BaseError {
  constructor(message, detailedMessages = [], code = 'Invalid Payload Error') {
    super(message, detailedMessages, code, StatusCodes.BAD_REQUEST);
  }
}
