// import mongoose from 'mongoose';

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.set('useCreateIndex', true);

// export const db = mongoose.connection;

// db.on('error', (error) => console.log('mongoose Error', error));

// db.on('open', () => {
//   console.log('MONGOOSE CONNECTION OK');
// });
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgres://mickael:mickael@localhost:5432/authapi', 
  { logging: false }
)

sequelize.authenticate()
  .then(() => console.log(`[POSTGRES]: Connection OK`))
  .catch(error => console.log(`[POSTGRES]: Error: ${error}`));