import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mMoto extends Cl_mVehiculo {
    public modelo: string = "";

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
        this.modelo = modelo;
    }

    set Modelo(modelo: string) {
        this.modelo = modelo;
    }

    get Modelo(): string {
        return this.modelo;
    }
    modeloPrecio(): number {
        let precio: number = 0;
        if (this.modelo === "P") {
            return 400;
        } else {
            if (this.modelo === "T") {
                return 500;
            } else {
                return 600;
            }
        }
    }
    
     toJSON() {
        return {
            ...super.toJSON(),
            modelo: this.modelo,
            modeloPrecio: this.modeloPrecio()
        };

    }
}
