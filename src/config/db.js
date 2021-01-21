import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgres://mickael:mickael@localhost:5432/authapi', 
  { logging: false }
)

sequelize.authenticate()
  .then(() => console.log(`[POSTGRES]: Connection OK`))
  .catch(error => console.log(`[POSTGRES]: Error: ${error}`));