import { IUser } from '../interfaces/IUser';
import User from '../database/models/UserModel';
import decodeToken from '../utilis/decodeToken';

class UserService {
  public findEmail = async (email: string): Promise<IUser | null> => {
    const user = await User.findOne({ where: { email } }) as User;

    return user;
  };

  getRole = (token: string) => {
    const { role } = decodeToken(token);

    return role;
  };
}

export default UserService;
