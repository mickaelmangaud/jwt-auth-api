import { UsersDAO } from '../dao';
import { UnauthorizedError } from '../errors';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils';

const AuthController = {
  login: async ({ email, password }) => {
    const user = await UsersDAO.findByEmail(email);
    if (!user) {
      throw new UnauthorizedError('Wrong email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError('Wrong email or password');
    }
    user.password = undefined;

    const token = generateToken({ _id: user._id, role: user.role });

    return { user, token };
  }
};

export default AuthController;