import * as sinon from 'sinon'
import * as chai from 'chai'

import { app } from '../app'
import Matches from '../database/models/MatchesModel'

import { allMatches } from './mocks/matches'

const { expect } = chai;

describe('Testando a rota /matches', () => {
    beforeEach(sinon.restore)
    describe('testando o ENDPOIT /matches', () => {
        it('retorna todas as partidas', async  () => {
            sinon.stub(Matches, 'findAll').resolves(allMatches as Matches[])

            const res = await chai.request(app).get('/matches'); 
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.deep.equal(allMatches as Matches[])
        })
    })
})