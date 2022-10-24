import { IUser } from "src/Interface/IUser";
import userModel from "src/database/models/userModel";

class userService {
public model = userModel;

    constructor() {
        this.findEmail = this.findEmail.bind(this);
    }

    public async findEmail(email: string): Promise<IUser | null> {
        const user = await this.model.findOne({ where: { email } });
        return user
    }
}

export default userService;