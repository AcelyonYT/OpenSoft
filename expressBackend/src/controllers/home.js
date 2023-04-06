/**
 * Sends the home page contents
 * @param {*} req request
 * @param {*} res response
 */
export default function home(dir, req, res) {

    res.sendFile(`${dir}/index.html`);
    
}