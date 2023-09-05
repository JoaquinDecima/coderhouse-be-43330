import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const request = supertest('http://localhost:8080');

describe('Test de integracion - Mascotas', () => {
  it('El endpoint POST /api/mascotas debe poder crear una mascota sactifactoriamente', async ()=>{
    const luna = {
      name: 'Luna',
      specie: 'cat',
      birthDate: new Date()
    }

    const { statusCode, _body } = await request.post('/api/pets').send(luna)

    expect(_body.payload).to.have.property('_id');
    expect(statusCode).to.equal(200)
    // Valido que el campo adopted sea falso
    expect(_body.payload.adopted).to.equal(false)
  });

  it('El endpoint GET /api/mascotas debe poder obtener todas las mascotas', async ()=>{
    const { statusCode, _body } = await request.get('/api/pets')

    expect(statusCode).to.equal(200)
    expect(_body.payload).to.be.an('array')
  });

  it("El endpoint POST /api/mascotas debe retornar un error si la mascota no tiene nombre", async () => {
    const luna = {
      specie: "cat",
      birthDate: new Date(),
    };

    const { statusCode, _body } = await request.post("/api/pets").send(luna);

    expect(statusCode).to.equal(400);
    expect(_body.error).to.equal("Incomplete values");
  });
});