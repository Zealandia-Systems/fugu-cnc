export default class Port {
  name: string;
  manufacturer?: string;
  serialNumber?: string;
  vendorId?: string;
  productId?: string;

  constructor(
    name: string,
    manufacturer?: string,
    serialNumber?: string,
    vendorId?: string,
    productId?: string
  ) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.serialNumber = serialNumber;
    this.vendorId = vendorId;
    this.productId = productId;
  }
}
