import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('POST /account', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('criando conta', () => {
    return request(app.getHttpServer())
      .post('/account')
      .expect(201)
      .expect('Content-Type', /json/);
  });
});

describe('POST /bank-transition/credit/2', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('acionar valor de 100  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/credit/2')
      .send({
        "value":  100,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(201, {
        "message": "The amount of 100 has been added to account 2"
      })
      .expect('Content-Type', /json/);

  });

  it('usuario invalido  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/credit/9992035198165481')
      .send({
        "value":  100,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(400, {
        "statusCode": 400,
        "message": "Account not exist",
        "error": "Bad Request"
      })
      .expect('Content-Type', /json/);

  });

  it('valor invalido  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/credit/2')
      .send({
        "value":  -900,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(400, {
        "statusCode": 400,
        "message": "Invalid value",
        "error": "Bad Request"
      })
      .expect('Content-Type', /json/);

  });
});


describe('POST /bank-transition/debit/2', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('debita valor de 5  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/debit/2')
      .send({
        "value":  5,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(201, {
        "message": "The amount of 5 was debited from account 2"
      })
      .expect('Content-Type', /json/);

  });

  it('usuario invalido  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/debit/9992035198165481')
      .send({
        "value":  5,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(400, {
        "statusCode": 400,
        "message": "Account not exist",
        "error": "Bad Request"
      })
      .expect('Content-Type', /json/);

  });

  it('valor invalido  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/debit/2')
      .send({
        "value":  -900,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(400, {
        "statusCode": 400,
        "message": "Invalid value",
        "error": "Bad Request"
      })
      .expect('Content-Type', /json/);

  });

  it('valor indisponivel na conta  (POST)', () => {
    return request(app.getHttpServer())
      .post('/bank-transition/debit/2')
      .send({
        "value":  99999999999999999999,
        "origin": "banco-agencia-conta-titular"
      })
      .expect(400, {
        "statusCode": 400,
        "message": "insufficient funds",
        "error": "Bad Request"
      })
      .expect('Content-Type', /json/);

  });
});

