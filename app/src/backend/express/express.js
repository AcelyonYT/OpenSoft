// imports
import app from "./src/app.js";
import http from "http";
import dotenv from "dotenv";

// Loads the .env file
dotenv.config();

/**
 * Grabs the port from the .env file
 * sets that part to the express app
 */
const port = process.env.BACKEND_PORT;
app.set("port", port);

/**
 * Creates a http server using our express app
 * Tells our server to listen to our port where the 
 * express app is located
 */
const server = http.createServer(app);
server.listen(port);