import { Sequelize } from 'sequelize';
import { logger } from '../utils';

export const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  { logging: false }
)

sequelize.authenticate()
  .then(() => {
    logger.info(`[POSTGRES]: Connection OK`);
  })
  .catch(error => {
    logger.error(`[POSTGRES]: Error: ${error}`)
  });