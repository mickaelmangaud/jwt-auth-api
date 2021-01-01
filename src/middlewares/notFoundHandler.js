import { NotFoundError } from '../errors';

const notFoundHandler = (req, res, next) => {
  next(new NotFoundError('Route not found'));
};

export default notFoundHandler;