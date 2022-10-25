import * as chai from 'chai';

import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

import { noPasswordLoginMock } from './mocks/Login';
import { missingFieldsMessage } from './mocks/message'

describe('/login', () => {
    it('retorno da menssagem "All fields must be filled"', async () => {
        const response = await chai.request(app).post('/login').send( noPasswordLoginMock);

        expect(response.status).to.be.equal(400);
        expect(response.body).to.be.equal(missingFieldsMessage);
    })
})