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
        switch (this.modelo) {
            case "P":
                return 400;
            case "T":
                return 500;
            default:
                return 600; // Precio base para modelos no listados
        }
    }
    tipoVehiculo() {
        return "M"; // Devuelve 'M' (Moto) directamente.
    }
    precioFinal() {
        let precioBase = this.modeloPrecio();
        let recargoColor = 0;
        if (this.color === "rojo") {
            recargoColor = precioBase * 0.15;
        }
        else {
            recargoColor = precioBase * 0.1;
        }
        return precioBase + recargoColor;
    }
    comision() {
        // Asumiendo una comisión del 5% para Motos (lógica de negocio)
        return this.precioFinal() * 0.05;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this.modelo, modeloPrecio: this.modeloPrecio(), precioFinal: this.precioFinal(), comision: this.comision() // Para verificación
         });
    }
}
