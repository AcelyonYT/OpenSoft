// Imports
import express from 'express';
import routes from './routes.js'
import cors from 'cors';

// Creates our express application
const app = express();

// Tells the app to use Cors
app.use(cors());

// Tells our app to use routes.js file
app.use("/", routes);

// Exports the app
export default app;