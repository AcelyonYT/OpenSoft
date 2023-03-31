import app from "./src/app.js";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);