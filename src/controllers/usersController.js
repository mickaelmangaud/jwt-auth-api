import { UsersDAO } from '../dao';
import { ConflictError } from '../errors';
import { generateToken } from '../utils';

const UsersController = {
  register: async (req) => {
    const foundUser = await UsersDAO.findByEmail(req.body.email);
    if (foundUser) {
      throw new ConflictError('User already exists');
    }

    const user = await UsersDAO.create(req.body);
    const createdUser = await UsersDAO.findById(user._id);

    const token = generateToken({ _id: user._id, role: user.role })

    return { user: createdUser, token };
  }
};

export default UsersController;