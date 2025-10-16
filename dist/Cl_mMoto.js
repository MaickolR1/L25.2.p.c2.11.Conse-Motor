import Cl_mVehiculo from "./Cl_mVehiculo.js";
export default class Cl_mMoto extends Cl_mVehiculo {
    constructor({ placa, color, modelo }) {
        super({ placa, color });
        this._modelo = "";
        this._modelo = modelo;
    }
    set Modelo(modelo) {
        this._modelo = modelo;
    }
    get Modelo() {
        return this._modelo;
    }
    modeloPrecio() {
        let precio = 0;
        if (this._modelo === "P") {
            return 400;
        }
        else {
            if (this._modelo === "T") {
                return 500;
            }
            else {
                return 600;
            }
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this._modelo, modeloPrecio: this.modeloPrecio() });
    }
}
