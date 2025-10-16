export default class Cl_mVehiculo {
    constructor({ placa, color }) {
        this._placa = "";
        this._color = "";
        this._placa = placa;
        this._color = color;
    }
    set Placa(placa) {
        this._placa = placa;
    }
    get Placa() {
        return this._placa;
    }
    set Color(color) {
        this._color = color;
    }
    get Color() {
        return this._color;
    }
    precioFinal() {
        let precio = 0;
        if (this._color === "rojo") {
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
            placa: this._placa,
            color: this._color,
            precioFinal: this.precioFinal(),
            comision: this.comision()
        };
    }
}
