// import ModelTeams from '../database/models/TeamModel';
import ModelMatches from '../database/models/MatchesModel';

export default class leaderboardService {
  public getleaderboard = async () => {
    // const Times = await ModelTeams.findAll();

    const allMatches = await ModelMatches.findAll({
      where: { inProgress: false },
    });

    console.log('allMatches', allMatches);

    return allMatches;
  };
}
