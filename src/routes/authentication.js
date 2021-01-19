import { Router } from 'express';
import { AuthController } from '../controllers';
import { sendResponse } from '../utils';
import { StatusCodes } from 'http-status-codes';
import { InvalidPayloadError } from '../errors';
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import loginSchema from '../validation/login.schema.json';

const router = new Router();
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const validateLogin = ajv.compile(loginSchema);

router.post('/login', (req, res, next) => {
  const isValidCredentials = validateLogin(req.body);
  if (!isValidCredentials) {
    const errors = validateLogin.errors.map(error => error.message);
    return next(new InvalidPayloadError('Invalid email or password', errors));
  }

  AuthController.login(req.body)
    .then((payload) => sendResponse(res, StatusCodes.OK, payload))
    .catch(next);
});

export default router;
