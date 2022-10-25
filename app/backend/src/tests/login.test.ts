import * as chai from 'chai';
import * as sinon from 'sinon';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';
import UserService from '../service/UserService';

import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

import { noPasswordLoginMock, noEmailLoginMock, InvalidEmail, InvalidPassword, mockFind, mockToken, mockValid } from './mocks/Login';

describe('Testandp a rota /login', () => {
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

    describe('/login/validate', () => {
        it('Mensagem de erro quando não tiver autorização', async () => {
            const response = await chai.request(app).get('/login/validate');

            expect(response.status).to.be.equal(401);
            expect(response.body).to.be.deep.equal({ message: 'unauthorized' })
        })
        it('retornando o role', async () => {
            const userService = new UserService();

            sinon.stub(User, 'findOne').resolves(mockFind as User);
            sinon.stub(bcrypt, 'compare').resolves(true);
            sinon.stub(userService, 'getRole').resolves({ role: 'admin' });

            const getToken = await chai.request(app).post('/login').send(mockValid);

            const token = getToken.body.token;

            const response = await chai.request(app).get('/login/validate').set('authorization', token);

            expect(response.status).to.be.equal(200);

        })
    })
})