import Cl_vAuto from "./Cl_vAuto.js";
import Cl_vMoto from "./Cl_vMoto.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el controlador
export default class Cl_vConsecionario extends Cl_vGeneral {
    constructor() {
        super({ formName: "vehiculoForm" });
        this._vMoto = new Cl_vMoto();
        this._vAuto = new Cl_vAuto();
        this.dataVehiculos = this.crearHTMLElement({ elementName: "dataVehiculos" });
        this.lblMontoTotal = this.crearHTMLElement({
            elementName: "lblMontoTotal",
        });
        this.lblComisionVendedor = this.crearHTMLElement({
            elementName: "lblComisionVendedor",
        });
        this.lblPorcentajeComision = this.crearHTMLElement({
            elementName: "lblPorcentajeComision",
        });
        this.btAgregarMoto = this.crearHTMLButtonElement({
            elementName: "btAgregarMoto",
            onclick: () => {
                this.show({ ver: false });
                this._vMoto.show();
            },
        });
        this.btAgregarAuto = this.crearHTMLButtonElement({
            elementName: "btAgregarAuto",
            onclick: () => {
                this.show({ ver: false });
                this._vAuto.show();
            },
        });
        this.dataVehiculos.innerHTML = "";
        this._vMoto.show({ ver: false });
        this._vAuto.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this._vMoto.controlador = controlador;
        this._vAuto.controlador = controlador;
    }
    get vMoto() {
        return this._vMoto;
    }
    get vAuto() {
        return this._vAuto;
    }
    reportarVehiculo({ dataVehiculo, montoTotal, comisionVendedor, porcentajeComision, }) {
        var _a;
        this.dataVehiculos.innerHTML += `
      <td class="colNumber">${dataVehiculo.placa}</td>
      <td class="colText">${dataVehiculo.color}</td>
      <td class="colCurrency">${`Bs.${(_a = dataVehiculo.precioBase) === null || _a === void 0 ? void 0 : _a.toFixed(2)}`}</td>
      <td class="colNumber">${dataVehiculo.modelo ? dataVehiculo.modelo : "--"}</td>
      <td class="colCurrency">${`Bs.${montoTotal.toFixed(2)}`}</td>
      <td class="colNumber">${comisionVendedor.toString()}</td>
      <td class="colCurrency">${`Bs.${porcentajeComision.toFixed(2)}`}</td>
    `;
        this.lblMontoTotal.innerHTML = montoTotal.toFixed(2);
        this.lblComisionVendedor.innerHTML = comisionVendedor.toString();
        this.lblPorcentajeComision.innerHTML = porcentajeComision.toFixed(2);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vAuto.show({ ver: false });
            this.vMoto.show({ ver: false });
        }
    }
}
