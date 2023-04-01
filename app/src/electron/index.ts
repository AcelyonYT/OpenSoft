// imports
import { app } from "electron";
import Window from "./openWindow";

let openWindows: Window;

app.whenReady().then( () => {
    // Creates a new window instance
    openWindows = new Window();

    // When the app is ready we display the window
    openWindows.displayWindow();
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
app.on("activate", () => {
    const open = openWindows.openedWindows(openWindows);
    if(!open) openWindows.displayWindow();
});