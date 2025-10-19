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
  toJSON() {
    return {
      ...super.toJSON(),
        precioBase: this.precioBase
    };
  }
  
}
  

