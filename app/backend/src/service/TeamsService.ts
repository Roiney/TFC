import teamModel from '../database/models/TeamModel';

export default class TeamsServive {
  public getTeamById = async (id: string) => {
    const IdTeams = await teamModel.findOne({ where: { id } });
    return IdTeams;
  };
}
