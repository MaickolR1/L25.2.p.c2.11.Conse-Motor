import Cl_mVehiculo from "./Cl_mVehiculo";
export default class Cl_mAuto extends Cl_mVehiculo {
    constructor({ placa, color, precioBase }) {
        super({ placa, color });
        this._precioBase = 0;
        this._precioBase = precioBase;
    }
    set PrecioBase(precioBase) {
        this._precioBase = precioBase;
    }
    get PrecioBase() {
        return this._precioBase;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { precioBase: this._precioBase });
    }
}
