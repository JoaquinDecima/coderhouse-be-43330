import { Router } from 'express';
import UsersController from '../controllers/users.controller.js';

const usersController = new UsersController();
const router = Router();

router.get('/', usersController.getAllUsers)
router.post('/', usersController.addUser)
router.post('/:uid/courses/:cid', usersController.addUserToCourse)

export default router;