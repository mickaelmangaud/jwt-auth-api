import mongoose from 'mongoose';
import { User } from '../models';

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

export const db = mongoose.connection;

db.on('error', error => console.log('mongoose Error', error));
db.on('open', () => {
  console.log('MONGOOSE CONNECTION OK');
});