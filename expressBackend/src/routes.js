// imports
import { Router } from 'express';
import path from "path";
import home from './controllers/home.js';
import version from './controllers/version.js';

/**
 * Creates a router variable so we
 * can start processing http request
 */
const router = Router();
const __dirname = path.resolve(path.dirname(""));

// Processes GET request
router.get("/", (req, res) => {
    home(__dirname, req, res);
});
router.post("/version", (req, res) => {
    version(__dirname, req, res);
})

// exports the router
export default router;