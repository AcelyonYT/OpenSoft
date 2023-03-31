import { Router } from 'express';
import { home } from './controllers/home.js';
import { about } from './controllers/about.js';

const router = Router();

router.get("/", home);
router.get("/about", about);

export default router;