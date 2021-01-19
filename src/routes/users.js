import { Router } from 'express';
import { UsersController } from '../controllers';
import { sendResponse } from '../utils';
import { StatusCodes } from 'http-status-codes';
import { InvalidPayloadError } from '../errors';
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import registerSchema from '../validation/register.schema.json';

const router = new Router();
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const validateRegistration = ajv.compile(registerSchema);

router.put('/register', async (req, res, next) => {
  const isValidCredentials = validateRegistration(req.body);
  if (!isValidCredentials) {
    const errors = validateRegistration.errors.map(error => error.message);
    return next(new InvalidPayloadError('Bad credentials', errors));
  }

  UsersController.register(req, res, next)
    .then((payload) => sendResponse(res, StatusCodes.CREATED, payload))
    .catch(next);
});

export default router;
