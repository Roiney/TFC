import { IUser } from '../interfaces/IUser';
import User from '../database/models/UserModel';

class UserService {
  public findEmail = async (email: string): Promise<IUser | null> => {
    console.log(email);
    const user = await User.findOne({ where: { email } }) as User;
    console.log('service', user);

    return user;
  };
}

export default UserService;
