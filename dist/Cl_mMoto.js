import Cl_mVehiculo from "./Cl_mVehiculo.js";
export default class Cl_mMoto extends Cl_mVehiculo {
    constructor({ placa, color, modelo }) {
        super({ placa, color });
        this.modelo = "";
        this.modelo = modelo;
    }
    set Modelo(modelo) {
        this.modelo = modelo;
    }
    get Modelo() {
        return this.modelo;
    }
    modeloPrecio() {
        let precio = 0;
        if (this.modelo === "P") {
            return 400;
        }
        else {
            if (this.modelo === "T") {
                return 500;
            }
            else {
                return 600;
            }
        }
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this.modelo, modeloPrecio: this.modeloPrecio() });
    }
}
