import * as sinon from 'sinon'
import * as chai from 'chai'

import { app } from '../app'
import Matches from '../database/models/MatchesModel'

import { allMatches, mockInProgressTrue, mockInProgressFalse } from './mocks/matches'

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
})