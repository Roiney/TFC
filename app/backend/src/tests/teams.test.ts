import * as sinon from 'sinon'
import * as chai from 'chai'

import { app } from '../app'
import { AllTeams, FindId } from './mocks/Teams'
import TeamModel from '../database/models/TeamModel';

const { expect } = chai;

describe('Testando a rota /teams', () =>{
    beforeEach(sinon.restore)
    describe('testando o ENDPOIT /teams', () => {
        it('retorno de todos os times', async () => {
            sinon.stub(TeamModel, 'findAll').resolves(AllTeams as TeamModel[])

            const res = await chai.request(app).get('/teams'); 

            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(AllTeams as TeamModel[]);
        })
    })
    describe('testando o ENDPOIT /teams/:id', () => {
        it('retorno do Id', async () => {
            sinon.stub(TeamModel, 'findOne').resolves(FindId as TeamModel)

            const res = await chai.request(app).get('/teams/16'); 

            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(FindId as TeamModel);
        })
    })
})