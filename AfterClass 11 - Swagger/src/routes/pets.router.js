import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Pet:
 *      type: object
 *      required:
 *        - name
 *        - specie
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the pet in MongoDB
 *        name:
 *          type: string
 *          description: The name of the pet
 *        specie:
 *          type: string
 *          description: The specie of the pet
 *        birthDate:
 *          type: string
 *          description: The birth date of the pet
 *        adopted:
 *          type: boolean
 *          description: The adoption status of the pet
 *        owner:
 *          type: string
 *          description: The owner of the pet
 *        image:
 *          type: string
 *          description: The image of the pet
 *      example:
 *        _id: 60f0f1b9e6b3f1b9e6b3f1b9
 *        name: "Luna"
 *        specie: "Cat"
 *        birthDate: "2021-07-15T03:00:00.000Z"
 *        adopted: true
 *        owner: 60f0f1b9e6b3f1b9e6b3f1b9
 *        image: "https://cdn2.thecatapi.com/images/MTYwNjMwNQ.jpg"
 */

/**
 * @swagger
 * tags:
 *  name: Pets
 *  description: The pets managing API
 * 
 * /api/pets:
 *  get:
 *    summary: Returns the list of all the pets
 *    tags: [Pets]
 *    responses:
 *      200:
 *        description: The list of the pets
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Pet'
 *      500:
 *        description: Some server error
 */
router.get('/',petsController.getAllPets);

/**
 * @swagger
 * tags:
 *  name: Pets
 *  description: The pets managing API
 * 
 * /api/pets/:
 *  post:
 *    summary: Creates a new pet
 *    tags: [Pets]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Pet'
 *    responses:
 *      201:
 *        description: The pet was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      500:
 *        description: Some server error
 */
router.post('/',petsController.createPet);

/**
 * @swagger
 * tags:
 *  name: Pets
 *  description: The pets managing API
 * /api/pets/withimage:
 *  post:
 *    summary: Creates a new pet with image
 *    tags: [Pets]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              specie:
 *                type: string
 *              birthDate:
 *                type: date
 *              image:
 *                type: string
 *                format: binary
 *    responses:
 *      201:
 *        description: The pet was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      500:
 *        description: Some server error
 */
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);

/**
 * @swagger
 * tags:
 *  name: Pets
 *  description: The pets managing API
 * 
 * /api/pets/{pid}:
 *  put:
 *    summary: Updates the pet by the id
 *    tags: [Pets]
 *    parameters:
 *      - in: path
 *        name: pid
 *        schema:
 *          type: string
 *        required: true
 *        description: The pet id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Pet'
 *    responses:
 *      200:
 *        description: The pet was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pet'
 *      404:
 *        description: The pet was not found
 *      500:
 *        description: Some error happened
 * 
 */ 
router.put('/:pid',petsController.updatePet);

/**
 * @swagger
 * tags:
 *  name: Pets
 *  description: The pets managing API
 * 
 * /api/pets/{pid}:
 *  delete:
 *    summary: Removes the pet by the id
 *    tags: [Pets]
 *    parameters:
 *      - in: path
 *        name: pid
 *        schema:
 *          type: string
 *        required: true
 *        description: The pet id
 *    responses:
 *      200:
 *        description: The pet was deleted
 *      404:
 *        description: The pet was not found
 *      500:
 *        description: Some error happened
 */
router.delete('/:pid',petsController.deletePet);

export default router;