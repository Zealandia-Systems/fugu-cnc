import AbstractPort from "common/api/port";
import ipc from "./ipc";

export default class Port extends AbstractPort {
  static list(): Promise<Port[]> {
    return ipc.invoke<AbstractPort[]>("port:list");
  }
}
