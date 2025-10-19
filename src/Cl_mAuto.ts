import Cl_mVehiculo from "./Cl_mVehiculo.js";

export default class Cl_mAuto extends Cl_mVehiculo {
    public precioBase: number = 0;
  constructor({
    placa,
    color,
    precioBase
  }: {
    placa: string;
    color: string;
    precioBase: number;
  }) {
    super({ placa, color });
    this.precioBase = precioBase;
  }

set PrecioBase(precioBase: number) {
    this.precioBase = precioBase;
  }
get PrecioBase(): number {
    return this.precioBase;
  }
  tipoVehiculo(): string {
    return "A"; // Devuelve 'A' (Auto) directamente.
}
precioFinal(): number {
    let recargoColor: number = 0;
    // Usar la propiedad precioBase del auto
    if (this.color.toLowerCase() === "rojo") {
        recargoColor = this.precioBase * 0.15; 
    } else {
        recargoColor = this.precioBase * 0.1; 
    }
    return this.precioBase + recargoColor;
}
comision(): number {
    // Asumiendo una comisión del 7% para Autos (basado en el 0.7 original, que parecía un error de coma decimal)
    return this.precioFinal() * 0.07; 
}
  toJSON() {
    return {
      ...super.toJSON(),
        precioBase: this.precioBase
    };
  }
  
}
  

