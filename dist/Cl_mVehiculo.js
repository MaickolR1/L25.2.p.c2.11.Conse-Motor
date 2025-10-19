export default class Cl_mVehiculo {
    constructor({ placa, color }) {
        this.placa = "";
        this.color = "";
        this.placa = placa;
        this.color = color;
    }
    set Placa(placa) {
        this.placa = placa;
    }
    get Placa() {
        return this.placa;
    }
    set Color(color) {
        this.color = color;
    }
    get Color() {
        return this.color;
    }
    precioFinal() {
        let precio = 0;
        if (this.color === "rojo") {
            return +precio * 0.15;
        }
        else {
            return +precio * 0.1;
        }
    }
    tipoVehiculo() {
        if (this.tipoVehiculo() === "Auto") {
            return "A";
        }
        else {
            return "M";
        }
    }
    comision() {
        if (this.tipoVehiculo() === "A") {
            return this.precioFinal() * 0.7;
        }
        else {
            if (this.tipoVehiculo() === "M") {
                return this.precioFinal() * 0.5;
            }
            else {
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
