import matchesModel from '../database/models/MatchesModel';
import TeamModel from '../database/models/TeamModel'

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
}
