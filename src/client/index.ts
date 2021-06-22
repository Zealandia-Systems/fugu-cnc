import { IPort } from "../common/Port";
import ipc from "./ipc";

(async () => {
  const ports = (await ipc.invoke("ports:list")) as IPort[];

  console.log(JSON.stringify(ports));
})();
