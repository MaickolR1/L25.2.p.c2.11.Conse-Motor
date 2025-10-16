import Cl_mVehiculo from "./Cl_mVehiculo";

export default class Cl_mConsecionario {
    private acprecioFinalA: number = 0;
    private acprecioFinalM: number = 0;
    private acComisionA: number = 0;
    private acComisionM: number = 0;

 procesarVehiculo(vehiculo: Cl_mVehiculo) {
    if (vehiculo.tipoVehiculo() === "A") {
        this.acprecioFinalA += vehiculo.precioFinal();
        this.acComisionA += vehiculo.comision();
    } else {
        if (vehiculo.tipoVehiculo() === "M") {
            this.acprecioFinalM += vehiculo.precioFinal();
            this.acComisionM += vehiculo.comision();
        }
    }
    }
    montoTotal(): number {
        return this.acprecioFinalA + this.acprecioFinalM;
    }

    comisionVendedor(): number {
        return this.acComisionA + this.acComisionM;
    }
    porcentajeComision(): number {
        return (this.comisionVendedor() / this.montoTotal()) * 100;
    }
}



