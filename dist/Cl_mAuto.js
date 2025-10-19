import Cl_mVehiculo from "./Cl_mVehiculo.js";
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
    tipoVehiculo() {
        return "A"; // Devuelve 'A' (Auto) directamente.
    }
    precioFinal() {
        let recargoColor = 0;
        // Usar la propiedad precioBase del auto
        if (this.color.toLowerCase() === "rojo") {
            recargoColor = this.precioBase * 0.15;
        }
        else {
            recargoColor = this.precioBase * 0.1;
        }
        return this.precioBase + recargoColor;
    }
    comision() {
        // Asumiendo una comisión del 7% para Autos (basado en el 0.7 original, que parecía un error de coma decimal)
        return this.precioFinal() * 0.07;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { precioBase: this.precioBase });
    }
}
