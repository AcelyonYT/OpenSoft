// Imports
import { BrowserWindow } from 'electron';
import dotenv from 'dotenv';
dotenv.config();

/**
 * This class handles the windows properties
 * We export it to be used in our main electron file
 */
export default class Window extends BrowserWindow {
    
    /**
     * Builds our window
     * Sets the size, webPreference
     */
    constructor(){
        super({
            title: "OpenSoft",
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            }
        });
    }

    /**
     * displays the window
     * removes the menu
     * open dev tools
     * and loads the build file
     */
    displayWindow() {
        this.removeMenu();
        if( import.meta.env.DEV) {
            this.loadFile(String(process.env.URL));
            this.webContents.openDevTools();
        }
        else{
            this.webContents.on('devtools-opened', () => {
                this.webContents.closeDevTools();
            });
            this.loadFile(String(process.env.URL));
        }
    }

    /**
     * Grabs all windows and returns true or false
     * @returns false if we have 0 windows open
     *          true if we have windows open
     */
    openedWindows(window: Window) {
        const numberOfWindows = Window.getAllWindows().length;
        if(numberOfWindows === 0) return false;
        return true;
    }

    /**
     * Exits the Application if the platform isn't darwin
     * @param app The Electron App class
     */
    exitTheApp(app: Electron.App ) {
        if(process.platform !== 'darwin') app.quit();
    }
}