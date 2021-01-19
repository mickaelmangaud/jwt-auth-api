import authenticationRouter from './authentication';
import usersRouter from './users';

export const registerRoutes = (app) => {
  app.use('/auth', authenticationRouter);
  app.use('/users', usersRouter);
};
