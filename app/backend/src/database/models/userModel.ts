import { STRING } from "sequelize";
import { IUser } from "src/Interface/IUser";
import db from '.';

class userModel extends Model<IUser> {
    declare email: string;
    declare password: string;
}

userModel.init(
    {
        email: {
            allowNull: false,
            type: STRING,
        },
        password: {
            allowNull: false,
            type: STRING,
        },
    },
    {
        underscored: true,
        sequelize: db,
        tableName: 'users',
        modelName: 'User',
        timestamps: false,
    },
);

export default userModel;