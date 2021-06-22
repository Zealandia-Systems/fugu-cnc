/* eslint-disable import/order */
import Path from "path";
import isDev from "electron-is-dev";

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("electron-reloader")(module, {
    debug: isDev,
    ignore: "src",
  });
} catch (error) {
  console.error(error);
}

import moduleAlias from "module-alias";
moduleAlias.addPath("dist");
import { app, BrowserWindow, shell } from "electron";
import Store from "electron-store";
import server from "./server";

const createWindow = () => {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: Path.join(__dirname, "../dist/preload.js"),
    },
  });

  const webContents = window.webContents;

  webContents.once("dom-ready", () => {
    window.show();
  });

  webContents.setWindowOpenHandler((details: Electron.HandlerDetails) => {
    void shell.openExternal(details.url);

    return { action: "deny" };
  });

  if (isDev) {
    void window.loadFile(Path.join(__dirname, "../dist/index.html"));
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
