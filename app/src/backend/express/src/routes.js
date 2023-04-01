// imports
import { Router } from 'express';
import { home } from './controllers/home.js';
import { about } from './controllers/about.js';

/**
 * Creates a router variable so we
 * can start processing http request
 */
const router = Router();

// Processes GET request
router.get("/", home);
router.get("/about", about);

// exports the router
export default router;