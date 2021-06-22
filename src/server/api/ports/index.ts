import { ipcMain } from "electron";
import Port from "./Port";

export default () => {
  ipcMain.handle(
    "port:list",
    async (event: Electron.IpcMainInvokeEvent, ...args: any[]) => Port.list()
  );
};
