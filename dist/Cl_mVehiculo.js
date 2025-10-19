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
        return 0;
    }
    tipoVehiculo() {
        return "";
    }
    comision() {
        return 0;
    }
    toJSON() {
        return {
            placa: this.placa,
            color: this.color
        };
    }
}
