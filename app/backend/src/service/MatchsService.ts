import matchesModel from '../database/models/MatchesModel';
import TeamModel from '../database/models/TeamModel';

export default class MatchesService {
  public getAllMatchesInProgress = async (inProgress: boolean) => {
    const teste = await matchesModel.findAll({
      where: { inProgress },
      include: [
        { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return teste;
  };

  public insert = async (match: matchesModel) => {
    const insertdMatch = await matchesModel.create({
      ...match,
      inProgress: true,
    });
    return insertdMatch;
  };

  public changeProgess = async (id: string) => {
    await matchesModel.update({ inProgess: false }, { where: { id } });
    return true;
  };
}
