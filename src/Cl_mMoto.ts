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
    switch (this.modelo) {
        case "P":
            return 400;
        case "T":
            return 500;
        default:
            return 600; // Precio base para modelos no listados
    }
}
    tipoVehiculo(): string {
    return "M"; // Devuelve 'M' (Moto) directamente.
}
precioFinal(): number {
    let precioBase = this.modeloPrecio();
    let recargoColor = 0;
    if (this.color === "rojo") {
        recargoColor = precioBase * 0.15; 
    } else {
        recargoColor = precioBase * 0.1;
    }
    return precioBase + recargoColor;
    
}
comision(): number {
    // Asumiendo una comisión del 5% para Motos (lógica de negocio)
    return this.precioFinal() * 0.05; 
}
    toJSON() {
        return {
            ...super.toJSON(),
            modelo: this.modelo,
            modeloPrecio: this.modeloPrecio(),
            precioFinal: this.precioFinal(), // Para verificación
            comision: this.comision()        // Para verificación
        };
    }
}

