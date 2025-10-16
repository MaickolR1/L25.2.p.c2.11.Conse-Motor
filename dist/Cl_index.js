import Cl_mConsecionario from "./Cl_mConsecionario.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vConsecionario from "./Cl_vConsecionario.js";
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
        this.controlador.procesarVehiculoMoto(vehiculoMoto[0]);
        this.controlador.procesarVehiculoAuto(vehiculoAuto[0]);
    }
}
