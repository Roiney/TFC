import { IUser } from '../interfaces/IUser';
import User from '../database/models/UserModel';
import decodeToken from '../utilis/decodeToken';

class UserService {
  public findEmail = async (email: string): Promise<IUser | null> => {
    console.log(email);
    const user = await User.findOne({ where: { email } }) as User;
    console.log('service', user);

    return user;
  };

  getRole = (token: string) => {
    const teste = decodeToken(token);

    return teste;
  };
}

export default UserService;
