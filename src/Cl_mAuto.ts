import Cl_mVehiculo from "./Cl_mVehiculo";

export default class Cl_mAuto extends Cl_mVehiculo {
    public _precioBase: number = 0;
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
    this._precioBase = precioBase;
  }

set PrecioBase(precioBase: number) {
    this._precioBase = precioBase;
  }
get PrecioBase(): number {
    return this._precioBase;
  }
  toJSON() {
    return {
      ...super.toJSON(),
        precioBase: this._precioBase    
    };
  }
  
}
  

