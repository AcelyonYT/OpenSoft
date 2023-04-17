// import and config .env files
import dotenv from "dotenv";
dotenv.config();

/**
 * Checks the version and sends back a boolean value
 * if the version match we send false (doesn't need updated)
 * if the version doesn't match we send true (it needs updated)
 * @param {*} dir directory
 * @param {*} req request
 * @param {*} res response
 */
export default function version(dir, req, res) {
    const versionFromBody = req.body.version;
    if(versionFromBody == process.env.VERSION){
        res.json(false);
    }else{
        res.json(true);
    }
}