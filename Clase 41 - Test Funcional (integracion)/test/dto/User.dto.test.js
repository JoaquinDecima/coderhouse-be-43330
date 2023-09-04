import UserDTO from "../../src/dto/User.dto.js";
import chai from 'chai';

const expect = chai.expect;
const getUserTokenFrom = UserDTO.getUserTokenFrom;

describe('DTO - User DTO', () => {
  it('El DTO debe unificar el nombre y apellido del usuario', () => {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan.perez@my.mail",
      password: "123456",
    };

    const user = getUserTokenFrom(mockUser);

    expect(user.name).to.be.equal("Juan Perez");
  });

  it("El DTO debe eliminar la contraseña del usuario y su primer nombre y apellido", () => {
      const mockUser = {
        first_name: "Juan",
        last_name: "Perez",
        email: "juan.perez@my.mail",
        password: "123456",
      };

      const user = getUserTokenFrom(mockUser);

      expect(user.password).to.be.undefined;
      expect(user.first_name).to.be.undefined;
      expect(user.last_name).to.be.undefined;
  });
});