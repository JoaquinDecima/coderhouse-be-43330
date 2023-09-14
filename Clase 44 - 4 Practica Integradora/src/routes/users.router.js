import { Router } from 'express';
import UsersController from '../controllers/users.controller.js';

const usersController = new UsersController();
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the user in MongoDB
 *        name:
 *          type: string
 *          description: The name of the user
 *        email:
 *          type: string
 *          description: The email of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *        courses:
 *          type: array
 *          description: The courses of the user
 *          items:
 *            type: string
 *            description: The course id
 *      example:
 *        _id: 60f0f1b9e6b3f1b9e6b3f1b9
 *        name: "Pato"
 *        email: "jdecima@vasak.net.ar"
 *        password: "123456"
 *        courses: []
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users managing API
 * 
 * /api/users:
 *  get:
 *    summary: Returns the list of all the users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: The list of the users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get('/', usersController.getAllUsers)

/**
 * @swagger
 *  tags:
 *  name: Users
 *  description: The users managing API
 * 
 * /api/users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *      409:
 *        description: The user already exists
 */
router.post('/', usersController.addUser)

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users managing API
 * 
 * /api/users/{uid}/courses/{cid}: 
 *  post:
 *    summary: Add a course to a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: uid
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *      - in: path
 *        name: cid
 *        schema:
 *          type: string
 *        required: true
 *        description: The course id
 *    responses:
 *      200:
 *        description: The user was successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *      404:
 *        description: The user or course was not found
 *      409:
 *        description: The user already exists in the course
 *      400:
 *        description: The user can't be added to the course
 */
router.post('/:uid/courses/:cid', usersController.addUserToCourse)

export default router;