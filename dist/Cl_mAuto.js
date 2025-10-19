import Cl_mVehiculo from "./Cl_mVehiculo";
export default class Cl_mAuto extends Cl_mVehiculo {
    constructor({ placa, color, precioBase }) {
        super({ placa, color });
        this.precioBase = 0;
        this.precioBase = precioBase;
    }
    set PrecioBase(precioBase) {
        this.precioBase = precioBase;
    }
    get PrecioBase() {
        return this.precioBase;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { precioBase: this.precioBase });
    }
}
