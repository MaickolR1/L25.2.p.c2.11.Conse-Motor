import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mMoto extends Cl_mVehiculo {
    public _modelo: string = "";

    constructor({
        placa,
        color,
        modelo
    }: {
        placa: string;
        color: string;
        modelo: string;
    }) {
        super({ placa, color });
        this._modelo = modelo;
    }

    set Modelo(modelo: string) {
        this._modelo = modelo;
    }

    get Modelo(): string {
        return this._modelo;
    }
    modeloPrecio(): number {
        let precio: number = 0;
        if (this._modelo === "P") {
            return 400;
        } else {
            if (this._modelo === "T") {
                return 500;
            } else {
                return 600;
            }
        }
    }
    
     toJSON() {
        return {
            ...super.toJSON(),
            modelo: this._modelo,
            modeloPrecio: this.modeloPrecio()
        };

    }
}
