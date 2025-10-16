export default class Cl_mConsecionario {
    constructor() {
        this.acprecioFinalA = 0;
        this.acprecioFinalM = 0;
        this.acComisionA = 0;
        this.acComisionM = 0;
    }
    procesarVehiculo(vehiculo) {
        if (vehiculo.tipoVehiculo() === "A") {
            this.acprecioFinalA += vehiculo.precioFinal();
            this.acComisionA += vehiculo.comision();
        }
        else {
            if (vehiculo.tipoVehiculo() === "M") {
                this.acprecioFinalM += vehiculo.precioFinal();
                this.acComisionM += vehiculo.comision();
            }
        }
    }
    montoTotal() {
        return this.acprecioFinalA + this.acprecioFinalM;
    }
    comisionVendedor() {
        return this.acComisionA + this.acComisionM;
    }
    porcentajeComision() {
        return (this.comisionVendedor() / this.montoTotal()) * 100;
    }
}
