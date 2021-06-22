import AbstractPort from "common/api/port";
import SerialPort from "serialport";

export default class Port extends AbstractPort {
  static async list(): Promise<Port[]> {
    return (await SerialPort.list()).map((p) => {
      return new Port(
        p.path,
        p.manufacturer,
        p.serialNumber,
        p.vendorId,
        p.productId
      );
    });
  }
}
