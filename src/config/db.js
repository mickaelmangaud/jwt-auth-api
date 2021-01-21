import { Sequelize } from 'sequelize';
import { logger } from '../utils';

export const sequelize = new Sequelize(
  'postgres://mickael:mickael@localhost:5432/authapi', 
  { logging: false }
)

sequelize.authenticate()
  .then(() => {
    logger.info(`[POSTGRES]: Connection OK`);
  })
  .catch(error => {
    logger.error(`[POSTGRES]: Error: ${error}`)
  });