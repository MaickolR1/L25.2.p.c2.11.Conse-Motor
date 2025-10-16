import Cl_mConsecionario from "./Cl_mConsecionario.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mAuto from "./Cl_mAuto.js";
import Cl_mMoto from "./Cl_mMoto.js";
import Cl_vConsecionario from "./Cl_vConsecionario.js";
import { iAuto } from "./Cl_vAuto.js";
import { iMoto } from "./Cl_vMoto.js";

export default class Cl_controlador {
  public modelo: Cl_mConsecionario;
  public vista: Cl_vConsecionario;
  constructor(modelo: Cl_mConsecionario, vista: Cl_vConsecionario) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarVehiculoMoto(data: iMoto) {
    let mMoto = new Cl_mMoto({
      placa: data.placa,
      color: data.color,
      modelo: data.modelo,
    });
    this.modelo.procesarVehiculo(mMoto);
    this.reportarVehiculo({ mVehiculo: mMoto });
  }
  procesarVehiculoAuto(data: iAuto) {
    let mAuto = new Cl_mAuto({
      placa: data.placa,
      color: data.color,
      precioBase: data.precioBase,
    });
    this.modelo.procesarVehiculo(mAuto);
    this.reportarVehiculo({ mVehiculo: mAuto });
  }
  reportarVehiculo({ mVehiculo }: { mVehiculo: Cl_mVehiculo }) {
    this.vista.reportarVehiculo({
      dataVehiculo: mVehiculo.toJSON(),
      montoTotal: this.modelo.montoTotal(),
      comisionVendedor: this.modelo.comisionVendedor(),
      porcentajeComision: this.modelo.porcentajeComision(),
    });
    this.vista.show();
  }
}
