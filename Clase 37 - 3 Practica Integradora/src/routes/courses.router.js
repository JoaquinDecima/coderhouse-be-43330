import { Router } from 'express';
import CoursesController from '../controllers/courses.controller.js';

const coursesController = new CoursesController();
const router = Router();

router.get('/', coursesController.getAllCourses);
router.post('/', coursesController.addCourse);

export default router;