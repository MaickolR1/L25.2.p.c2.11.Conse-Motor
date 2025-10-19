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
    preciofinal(): number {
    switch (this.color.toLowerCase()) {
        case "rojo":
            return 0.15;
        
        default:
            return 0;
    }
    }
    comision(): number {
        return 0;
    }
    
    toJSON() {
    return {
        placa: this.placa,
        color: this.color
    };
  }

}