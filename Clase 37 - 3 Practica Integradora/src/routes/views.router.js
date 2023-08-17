import { Router } from 'express';
import { home, courses } from '../controllers/views.controller.js';


const router = Router();

router.get('/', home)
router.get('/courses', courses)


export default router;