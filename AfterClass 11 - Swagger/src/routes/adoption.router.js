import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Adoption:
 *      type: object
 *      required:
 *        - user
 *        - pet
 *      properties:
 *        _id:
 *          type: string
 *          description: The auto-generated id of the adoption in MongoDB
 *        user:
 *          type: string
 *          description: The user who adopted the pet
 *        pet:
 *          type: string
 *          description: The pet that was adopted
 *        date:
 *          type: string
 *          description: The date of the adoption
 *      example:
 *        _id: 60f0f1b9e6b3f1b9e6b3f1b9
 *        user: 60f0f1b9e6b3f1b9e6b3f1b9
 *        pet: 60f0f1b9e6b3f1b9e6b3f1b9
 */

/**
 * @swagger
 * tags:
 *  name: Adoptions
 *  description: The adoptions managing API
 * 
 * /api/adoptions:
 *  get:
 *    summary: Returns the list of all the adoptions
 *    tags: [Adoptions]
 *    responses:
 *      200:
 *        description: The list of the adoptions
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Adoption'
 *      500:
 *       description: Some server error
 */
router.get('/',adoptionsController.getAllAdoptions);
router.get('/:aid',adoptionsController.getAdoption);
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;