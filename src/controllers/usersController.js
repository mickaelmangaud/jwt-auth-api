import { UsersDAO } from '../dao';
import { ConflictError } from '../errors';
import jwt from 'jsonwebtoken';

const usersController = {
  register: async (req) => {
    const foundUser = await UsersDAO.findByEmail(req.body.email);
    if (foundUser) {
      throw new ConflictError('User already exists');
    }

    const user = await UsersDAO.create(req.body);
    const createdUser = await UsersDAO.findById(user._id);

    const token = jwt.sign(
      { _id: user._id, role: user.role }, 
      process.env.JWT_SECRET
    );

    return { user: createdUser, token };
  }
};

export default usersController;