// import and config an .env file
import { BrowserWindow } from "electron";

/**
 * Checks if the app needs to be updated
 */
export default class Updater extends BrowserWindow {
    /**
     * Creates the updater window
     */
    constructor() {
        super({
            height: 700,
            width: 500,
            frame: false,
            show: false,
            resizable: false,
            alwaysOnTop: true,
            webPreferences: {
                nodeIntegration: true
            }
        });
    }

    displayUpdaterWindow(){
        this.show();
        this.removeMenu();
        this.loadFile(String(process.env.UPDATER_URL))
    }

    /**
     * Sends a post request to the backend to check the version
     * @returns the value of needsUpdated (can be true or false)
     */
    async checkForUpdates() {
        let needsUpdated: Boolean;
        needsUpdated = await fetch(`${process.env.BACKEND_VERSION_LINK}`, {
            method: "POST",
            body: JSON.stringify({
                version: process.env.VERSION
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json() )
        .then((json) => { 
            return needsUpdated = json; 
        });
        return needsUpdated;
    }
}