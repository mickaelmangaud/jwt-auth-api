const notFoundHandler = (req, res, next) => {
  next(new Error('Route not found'));
};

export default notFoundHandler;