export default class Cl_mVehiculo {
    public _placa: string = ""; 
    public _color: string = "";
    constructor({ 
        placa, 
        color 
    }:  { 
        placa: string; 
        color: string }) {
        this._placa = placa;
        this._color = color;
     }
     set Placa(placa: string) {
        this._placa = placa;
     }
     get Placa(): string {
        return this._placa;
     }
     set Color(color: string) { 
        this._color = color;
     }
     get Color(): string {
        return this._color;
    }
    precioFinal(): number {
        let precio: number = 0;
        if (this._color === "rojo") {
            return +precio * 0.15;
        } else {
            return +precio * 0.1;
        }
        
    }
    tipoVehiculo(): string {
        if (this.tipoVehiculo() === "Auto") {
            return "A";
        } else {
            return "M";
        }
    }
    comision(): number {
        if (this.tipoVehiculo() === "A") {
            return this.precioFinal() * 0.7;
        } else {
            if (this.tipoVehiculo() === "M") {
                return this.precioFinal() * 0.5;
            } else {
                return 0;
        }
    }
    }
    toJSON() {
    return {
        placa: this._placa,
        color: this._color,
        precioFinal: this.precioFinal(),
        comision: this.comision()
    };
  }

}