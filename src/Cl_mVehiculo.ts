export default class Cl_mVehiculo {
    public placa: string = ""; 
    public color: string = "";
    constructor({ 
        placa, 
        color 
    }:  { 
        placa: string; 
        color: string }) {
        this.placa = placa;
        this.color = color;
     }
     set Placa(placa: string) {
        this.placa = placa;
     }
     get Placa(): string {
        return this.placa;
     }
     set Color(color: string) { 
        this.color = color;
     }
     get Color(): string {
        return this.color;
    }
    precioFinal(): number {
        let precio: number = 0;
        if (this.color === "rojo") {
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
        placa: this.placa,
        color: this.color,
        precioFinal: this.precioFinal(),
        comision: this.comision()
    };
  }

}