import { User } from '../models';

class UserDao {
	constructor() {
		if (!UserDao.instance) {
			UserDao.instance = this;
		}
		return UserDao.instance;
	}

	async create(user) {
		return await User.create(user);
	}

	async findById(id) {
		return await User.findByPk(id);
	}

	async findByEmail(email) {
		return await User.findOne({ where: { email }});
	}
}

const instance = new UserDao();

Object.freeze(instance);

export default instance;
