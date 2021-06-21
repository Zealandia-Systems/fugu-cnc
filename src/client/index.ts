import { ipcRenderer } from "electron";
import { IPort } from "../common/Port";

async () => {
  const ports = (await ipcRenderer.invoke("ports:list")) as IPort[];

  console.log(JSON.stringify(ports));
};
