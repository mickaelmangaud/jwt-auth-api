import { UsersDAO } from '../dao';
import { UnauthorizedError } from '../errors';
import { generateToken, logger } from '../utils';
import bcrypt from 'bcryptjs';

async function login({ email, password }) {
  const user = await UsersDAO.findByEmail(email);
  if (!user) {
    logger.error(`[USERS CONTROLLER]: User passed to login not found`);
    throw new UnauthorizedError('Wrong email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    logger.error(`[USERS CONTROLLER]: Provided password does not match the one found in database`);
    throw new UnauthorizedError('Wrong email or password');
  }

  user.password = undefined;
  const token = generateToken(user);

  return { user, token };
}

export default {
  login,
};
