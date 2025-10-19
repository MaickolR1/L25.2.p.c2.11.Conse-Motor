import Cl_mConsecionario from "./Cl_mConsecionario.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vConsecionario from "./Cl_vConsecionario.js";
import Cl_mMoto from "./Cl_mMoto.js";
import Cl_mAuto from "./Cl_mAuto.js";
import { vehiculoMoto, vehiculoAuto } from "./_data.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vConsecionario();
        let modelo = new Cl_mConsecionario();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarVehiculoMoto(new Cl_mMoto(vehiculoMoto[0]));
        this.controlador.procesarVehiculoMoto(new Cl_mMoto(vehiculoMoto[1]));
        this.controlador.procesarVehiculoMoto(new Cl_mMoto(vehiculoMoto[2]));
        this.controlador.procesarVehiculoMoto(new Cl_mMoto(vehiculoMoto[3]));
        this.controlador.procesarVehiculoAuto(new Cl_mAuto(vehiculoAuto[0]));
        this.controlador.procesarVehiculoAuto(new Cl_mAuto(vehiculoAuto[1]));
        this.controlador.procesarVehiculoAuto(new Cl_mAuto(vehiculoAuto[2]));
        this.controlador.procesarVehiculoAuto(new Cl_mAuto(vehiculoAuto[3]));
    }
}
