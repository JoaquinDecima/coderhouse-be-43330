import UsersController from "../../src/controllers/users.controller.js";
import { logger } from "../../src/config/logger.js";
import chai from "chai";

const expect = chai.expect;
const usersController = new UsersController();

describe("UsersController", () => {
    describe("getAllUsers", () => {

        it("should return all users", async () => {
            let asd;
            const req = {
              logger,
            };
            const res = {
                send: (data) => {asd = data},
            }
            const users = [{
                _id: "60f0f1b9e6b3f1b9e6b3f1b9",
                name: "Pato",
                email: "jdecima@vasak.net.ar",
                password: "123456",
                courses: []
            }]
            
            usersController.usersService = {
                getUsers: () => users,
            };

            await usersController.getAllUsers(req, res);
            expect(asd.status).to.equal("success");
            expect(asd.payload).to.equal(users);
          });
        });

});