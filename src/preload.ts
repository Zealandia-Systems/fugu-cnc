import { contextBridge , ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("ipc", {
        invoke: <T>(method: string, ...args: any[]): Promise<T> => ipcRenderer.invoke(method, args)        
    }
);
