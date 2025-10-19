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
    tipoVehiculo() {
        return "M"; // Devuelve 'M' (Moto) directamente.
    }
    precioFinal() {
        let precioBase = this.modeloPrecio();
        let recargoColor = 0;
        // Calcula el recargo por color
        if (this.color.toLowerCase() === "rojo") {
            recargoColor = precioBase * 0.15;
        }
        else {
            recargoColor = precioBase * 0.1;
        }
        return precioBase + recargoColor;
    }
    comision() {
        // Asumiendo una comisión del 15% para Motos (lógica de negocio)
        return this.precioFinal() * 0.15;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this.modelo, modeloPrecio: this.modeloPrecio(), precioFinal: this.precioFinal(), comision: this.comision() // Para verificación
         });
    }
}
