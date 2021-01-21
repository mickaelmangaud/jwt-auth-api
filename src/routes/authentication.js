import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AuthController } from '../controllers';
import { sendResponse, logger } from '../utils';
import { InvalidPayloadError } from '../errors';
import { validateLogin } from '../validation';

const router = new Router();

router.post('/login', (req, res, next) => {
  logger.info(`[ROUTE]: /auth/login with payload ${JSON.stringify(req.body)}`);

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
