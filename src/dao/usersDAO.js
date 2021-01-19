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

	async findById(_id) {
		return await User.findById(_id)
			.select('-__v -createdAt -updatedAt -password');
	}

	async findByEmail(email) {
		return await User.findOne({ email })
			.select('-__v -createdAt -updatedAt');
	}
}

const instance = new UserDao();

Object.freeze(instance);

export default instance;
