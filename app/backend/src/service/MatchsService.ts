import { IResultado } from '../interfaces/IResultao';
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
    console.log('chegou');
    await matchesModel.update({ inProgress: false }, { where: { id } });
    const teste = await matchesModel.findAll({ where: { id } });
    console.log(teste);

    return { message: 'Finished' };
  };

  public update = async (id: number, resultado: IResultado) => {
    const { homeTeamGoals, awayTeamGoals } = resultado;

    await matchesModel.update({ awayTeamGoals, homeTeamGoals }, { where: { id } });
  };
}
