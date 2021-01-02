import { UsersDAO } from '../dao';
import { ConflictError } from '../errors';
import { generateToken } from '../utils';

async function register(req)  {
  const foundUser = await UsersDAO.findByEmail(req.body.email);
  if (foundUser) {
    throw new ConflictError('User already exists');
  }

  const user = await UsersDAO.create(req.body);
  const createdUser = await UsersDAO.findById(user._id);

  const token = generateToken(user)

  return { user: createdUser, token };
}

export default {
  register,
}