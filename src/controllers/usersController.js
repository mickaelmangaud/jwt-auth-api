import { UsersDAO } from '../dao';
import { ConflictError } from '../errors';
import { generateToken, logger } from '../utils';

async function register(req) {
  const foundUser = await UsersDAO.findByEmail(req.body.email);
  if (foundUser) {
    logger.error(`[ROUTE]: /users/register User with email ${req.body.email} already exists`);
    throw new ConflictError('User already exists');
  }

  const user = await UsersDAO.create(req.body);
  user.password = undefined ;

  const token = generateToken(user);

  return { user, token };
}

export default {
  register,
};
