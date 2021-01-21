import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsersController } from '../controllers';
import { sendResponse, logger } from '../utils';
import { InvalidPayloadError } from '../errors';
import { validateRegistration } from '../validation';

const router = new Router();

router.put('/register', async (req, res, next) => {
  logger.info(`[PUT]: /users/register with payload: ${JSON.stringify(req.body)}`);

  const isValidCredentials = validateRegistration(req.body);
  if (!isValidCredentials) {
    const errors = validateRegistration.errors.map(error => error.message);
    return next(new InvalidPayloadError('Bad credentials', errors));
  }

  UsersController.register(req, res, next)
    .then((payload) => sendResponse(res, StatusCodes.CREATED, payload))
    .catch(next);
});

router.delete('/:id', async (req, res, next) => {
  logger.info(`[DELETE]: /users/:id with id: ${req.params.id}`);
  
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return next(new InvalidPayloadError(`${req.params.id} is not a valid user id`));
  }
  
  usersController.deleteById(id)
    .then(payload => sendResponse(res, StatusCodes.OK, payload))
    .catch(next);
});

export default router;
