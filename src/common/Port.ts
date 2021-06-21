export interface IPort {
    name: string,
    manufacturer?: string
};

export default class Port implements IPort {
    name: string;
    manufacturer?: string;

    constructor(name: string, manufacturer?: string) {
        this.name = name;
        this.manufacturer = manufacturer;
    }
};
