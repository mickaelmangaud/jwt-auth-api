import { sequelize } from '../config/db';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  }
}, {
  hooks: {
    beforeCreate: async (user, _) => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }
  },
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
});

User.sync({ force:true }).then(() => {
  User.create({
    email: 'mickael@gmail.com',
    password: 'okcomputer',
    role: 'admin'
  })

  User.create({
    email: 'jade@gmail.com',
    password: 'okcomputer'
  })
});

export default User;