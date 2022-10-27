import { any } from 'sequelize/types/lib/operators';
import sequelize from '../database/models';
import sql from '../utilis/sqlString';

export default class leaderboardService {
  public getleaderboard = async () => {
    const [teste] = await sequelize.query(sql.homeString);
    console.log(teste);

    return teste;
  };
}
