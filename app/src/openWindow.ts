// Imports
import { BrowserWindow } from 'electron';

/**
 * This class handles the windows properties
 * We export it to be used in our main electron file
 */
export default class Window extends BrowserWindow {

    // updater: Updater;
    
    /**
     * Builds our window
     * Sets the size, webPreference
     */
    constructor(){
        super({
            width: 1255,
            height: 745,
            frame: false,
            show: false,
            resizable: false,
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
    async displayWindow() {
        this.show();
        if( import.meta.env.DEV) {
            this.webContents.openDevTools();
        }
        else{
            this.webContents.on('devtools-opened', () => {
                this.webContents.closeDevTools();
            });
        }
        this.removeMenu();
        this.loadFile(String(process.env.URL));
    }

    /**
     * Grabs all windows and returns true or false
     * @returns false if we have 0 windows open
     *          true if we have windows open
     */
    openedWindows() {
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