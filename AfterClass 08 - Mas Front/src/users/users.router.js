import { Router } from "express";
import { createUser, getUserById, getUsers } from "./users.controller.js";

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/', createUser);

export default usersRouter;