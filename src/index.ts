try {
	require('electron-reloader')(module);
} catch {}

import { app, BrowserWindow, shell } from 'electron';
import Store from 'electron-store';
import * as path from 'path';
import isDev from 'electron-is-dev';
import server from './server';

const createWindow = () => {
    // Create the browser window.
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        //preload: path.join(__dirname, "preload.js"),
        }
    });

    const webContents = window.webContents;

    webContents.once('dom-ready', () => {
        window.show();
    });

    webContents.setWindowOpenHandler((details: Electron.HandlerDetails) => {
        shell.openExternal(details.url);

        return { action: "deny" };
    });

    if(isDev) {
        window.loadFile(path.join(__dirname, "../public/index.html"));
        webContents.openDevTools();
    } else {
        //window.loadFile
    }
};

(async () => {
    await app.whenReady();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
    }
    });
    
    Store.initRenderer();

    server();
    
    createWindow();
})();
