import { Model, INTEGER, STRING } from 'sequelize';
import { IUser, UserCreation } from '../../interfaces/IUser';
import db from '.';

class User extends Model<IUser, UserCreation> {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    username: {
      allowNull: false,
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING,
    },
    password: {
      allowNull: false,
      type: STRING,
    },
    role: {
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

export default User;
