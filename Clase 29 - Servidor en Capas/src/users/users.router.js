import { Routers } from "express";
import { createUser, getUserById, getUsers } from "./users.controller.js";

const usersRouter = Routers();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', createUser);

export default usersRouter;