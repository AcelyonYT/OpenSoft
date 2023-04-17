// imports
import { app } from "electron";
import Window from "./openWindow";
import Updater from "./updater";
import dotenv from "dotenv";
dotenv.config();

// Sets types
let openWindows: Window;
let updater: Updater;

app.whenReady().then( async () => {
    // Creates a new window instance
    openWindows = new Window();

    // When the app is ready we display the window
    openWindows.displayWindow();

    updater = new Updater();
    let needsToUpdate = updater.checkForUpdates();
    if( await needsToUpdate ) updater.displayUpdaterWindow();
});

// When all windows are closed we exit the application
app.on("window-all-closed", () => {
    openWindows.exitTheApp(app);
});

/**
 * When we activate the app we check if we have opened windows
 * if we have no open windows we display a window
 * if we have open windows then we don't do anything
 */
app.on("activate", async () => {
    const open = openWindows.openedWindows();
    if(!open) openWindows.displayWindow();
});