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
    tipoVehiculo(): string {
    return "M"; // Devuelve 'M' (Moto) directamente.
}
precioFinal(): number {
    let precioBase = this.modeloPrecio();
    let recargoColor: number = 0;
    
    // Calcula el recargo por color
    if (this.color.toLowerCase() === "rojo") {
        recargoColor = this.modeloPrecio() * 0.15; 
    } else {
        recargoColor = this.modeloPrecio() * 0.1;  
    }
    return precioBase + recargoColor;
}
comision(): number {
    // Asumiendo una comisión del 15% para Motos (lógica de negocio)
    return this.precioFinal() * 0.5; 
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

