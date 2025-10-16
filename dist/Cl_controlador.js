import Cl_mAuto from "./Cl_mAuto.js";
import Cl_mMoto from "./Cl_mMoto.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarVehiculoMoto(data) {
        let mMoto = new Cl_mMoto({
            placa: data.placa,
            color: data.color,
            modelo: data.modelo,
        });
        this.modelo.procesarVehiculo(mMoto);
        this.reportarVehiculo({ mVehiculo: mMoto });
    }
    procesarVehiculoAuto(data) {
        let mAuto = new Cl_mAuto({
            placa: data.placa,
            color: data.color,
            precioBase: data.precioBase,
        });
        this.modelo.procesarVehiculo(mAuto);
        this.reportarVehiculo({ mVehiculo: mAuto });
    }
    reportarVehiculo({ mVehiculo }) {
        this.vista.reportarVehiculo({
            dataVehiculo: mVehiculo.toJSON(),
            montoTotal: this.modelo.montoTotal(),
            comisionVendedor: this.modelo.comisionVendedor(),
            porcentajeComision: this.modelo.porcentajeComision(),
        });
        this.vista.show();
    }
}
