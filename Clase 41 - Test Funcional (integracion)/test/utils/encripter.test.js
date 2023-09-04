import chai from "chai";
import { encryptPassword, comparePassword } from "../../src/utils/encripter.js";

const expect = chai.expect;

describe("Utils - Encripter", () => {
  it("El encriptador debe poder encriptar una contraseña, y su resultado debe ser diferente.", () => {
    const password = "123456";
    const hash = encryptPassword(password);

    expect(hash).to.not.be.equal(password);
  });
  it("El encriptador debe poder encriptar una contraseña, el hash tiene que ser efectivo.", () => {
    const password = "123456";
    const hash = encryptPassword(password);

    const rejex =
      /(?=[A-Za-z0-9@#$%/^.,{}&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;

    expect(hash).to.match(rejex);
  });
  it("Si la contraseña es modificada, no debe validarse la pass", () => {
    const password = "123456";
    const hash = encryptPassword(password);
    const passwordModified = "1234567";

    const result = comparePassword(passwordModified, hash);

    expect(result).to.be.false;
  });
  
});