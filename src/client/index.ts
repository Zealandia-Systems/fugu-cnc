import { IPort } from "../common/Port";
import { ipcRenderer } from "electron";

async() => {
    const ports = await ipcRenderer.invoke('ports:list') as IPort[];

    console.log(JSON.stringify(ports));
}
