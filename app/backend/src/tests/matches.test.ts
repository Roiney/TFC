import * as sinon from 'sinon'
import * as chai from 'chai'
import * as jwt from 'jsonwebtoken';

import { app } from '../app'
import Matches from '../database/models/MatchesModel'
import ModelTeams from '../database/models/TeamModel'

import { FindId } from './mocks/Teams'
import { mockToken, mockTokenWrong } from './mocks/Login'
import { allMatches, mockInProgressTrue, mockInProgressFalse, CreateMatch, CreateSameTimesMatch, CreateInexistIdTimesMatch } from './mocks/matches'

const { expect } = chai;

describe('Testando a rota /matches', () => {
    beforeEach(sinon.restore)
    describe('testando o ENDPOIT /matches', () => {
        it('retorna todas as partidas', async () => {
            sinon.stub(Matches, 'findAll').resolves(allMatches as Matches[])

            const res = await chai.request(app).get('/matches');

            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(allMatches as Matches[])
        })
        it("Testa se o endpoint /matches?inProgress=true", async () => {
            sinon.stub(Matches, 'findAll').resolves(mockInProgressTrue as Matches[])

            const res = await chai.request(app).get('/matches?inProgress=true');

            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(mockInProgressTrue as Matches[])
        })
        it("Testa se o endpoint /matches?inProgress=false", async () => {
            sinon.stub(Matches, 'findAll').resolves(mockInProgressFalse as Matches[])

            const res = await chai.request(app).get('/matches?inProgress=false');

            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(mockInProgressFalse as Matches[])
        })
    })
    describe('Testando a rota /matches metodo POST', () => {
        it('retorna a partida criada', async () => {
            sinon.stub(ModelTeams, 'findOne').resolves(FindId as any);
            sinon.stub(Matches, 'create').resolves(CreateMatch as any)

            const res = await chai.request(app)
                .post('/matches')
                .send(CreateMatch)
                .set('authorization',  mockToken);

            expect(res.body).to.be.deep.equal(CreateMatch)
        })
        it('retorna a mensagem que os dois timoes são iguas', async () => {
            sinon.stub(ModelTeams, 'findOne').resolves(FindId as any);
            sinon.stub(Matches, 'create').resolves(CreateMatch as any)

            const res = await chai.request(app)
                .post('/matches')
                .send(CreateSameTimesMatch)
                .set('authorization',  mockToken);
                
                expect(res.body.message).to.be.deep.equal('It is not possible to create a match with two equal teams')
        })
        it('retorna a mensagem que um time não existe id', async () => {
            sinon.stub(ModelTeams, 'findOne').resolves(null);

            const res = await chai.request(app)
                .post('/matches')
                .send(CreateInexistIdTimesMatch)
                .set('authorization',  mockToken);              
                
                expect(res.body.message).to.be.deep.equal('There is no team with such id!')
        })
        it('retorna a partida finalizada', async () => {
            sinon.stub(Matches, 'update')

            const res = await chai.request(app).patch('/matches/5/finish')
  
            expect(res.body.message).to.be.deep.equal('Finished')
                
        })
    })
})