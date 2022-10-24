import { IUser } from '../interfaces/IUser';
import User from '../database/models/UserModel';

class UserService {
  public model = User;

  constructor() {
    this.findEmail = this.findEmail.bind(this);
  }

  public async findEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}

export default UserService;
