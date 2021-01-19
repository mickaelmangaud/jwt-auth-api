import jwt from 'jsonwebtoken';

export const generateToken = ({ _id, role }) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
};
