import Assert from 'assert';
import chai from 'chai';
import Users from '../../src/dao/Users.dao.js';
import mongoose from 'mongoose';

const assert = Assert.strict;
const expect = chai.expect;

mongoose.connect(
  `mongodb+srv://jdecima:123@localhost:27017/?retryWrites=true&w=majority`
);
const userDao = new Users();

describe('UsersDAO - MongoDB', function() {
  beforeEach( function () {
    this.timeout(10000);
    //mongoose.connection.collections.users.drop();
  });
  

  it('El DAO debe agregar un usuario correctamente a la base de datos de MongoDB', async function() {
    const mockUser = {
      first_name: 'Juan',
      last_name: 'Perez',
      email: 'juan.perez@my.mail',
      password: '123456',
    };
    const result = await userDao.save(mockUser);
    
    assert.ok(result._id);
    expect(result._id).to.be.ok;
  });

  it("El DAO debe agregar un array vacio por defecto al estado interno mascotas", async () => {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan.perez@my.mail",
      password: "123456",
    };
    const result = await userDao.save(mockUser);

    assert.deepStrictEqual(result.pets, []);
    expect(result.pets).to.deep.equal([]);
  });

  it("El DAO debe poder obtener el usuario por email", async () => {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan.perez@my.mail",
      password: "123456",
    };
    await userDao.save(mockUser);

    const user = await userDao.getBy({email: "juan.perez@my.mail"});

    assert.ok(user._id);
    expect(user._id).to.be.ok;
    expect(user.email).to.be.equal("juan.perez@my.mail");
    expect(user).to.have.property("email");
  });
});