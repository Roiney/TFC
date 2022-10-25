import * as chai from 'chai';
import * as sinon from 'sinon';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';

import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

import { noPasswordLoginMock, noEmailLoginMock, InvalidEmail, InvalidPassword, mockFind, mockToken, mockValid } from './mocks/Login';

describe('/login', () => {
    beforeEach(sinon.restore)
    describe('testando o ENDPOIT /login', () => {
    it('retorno da menssagem "All fields must be filled" faltando password', async () => {
        const response = await chai.request(app).post('/login').send(noPasswordLoginMock);

        expect(response.status).to.be.equal(400);     
        expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
        
    })
    it('retorno da menssagem "All fields must be filled" faltando email', async () => {
        const response = await chai.request(app).post('/login').send(noEmailLoginMock);

        expect(response.status).to.be.equal(400);     
        expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
        
    })
    it('retorno da menssagem "Incorrect email or password" email errado', async () => {
        sinon.stub(User, 'findOne').resolves(null);
        const response = await chai.request(app).post('/login').send(InvalidEmail);

        expect(response.status).to.be.equal(401);         
        expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    })
    it('retorno da menssagem "Incorrect email or password" senha errado', async () => {
        sinon.stub(User, 'findOne').resolves(null);
        const response = await chai.request(app).post('/login').send(InvalidPassword);

        expect(response.status).to.be.equal(401);         
        expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    })
    it('retorno token valido', async () => {
        sinon.stub(User, 'findOne').resolves(mockFind as User);
        sinon.stub(jwt, 'sign').resolves(mockToken);
        sinon.stub(bcrypt, 'compare').resolves(true);

        const response = await chai.request(app).post('/login').send(mockValid);

        expect(response.status).to.be.equal(200); 
        expect(response.body).to.haveOwnProperty('token');

    })
})
})