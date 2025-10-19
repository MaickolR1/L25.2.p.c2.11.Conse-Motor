import Cl_vAuto from "./Cl_vAuto.js";
import Cl_vMoto from "./Cl_vMoto.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
interface iVehiculo {
  placa: string;
  color: string;
  modelo?: string;
  precioBase?: number;
}

// Define una interfaz para el controlador
export default class Cl_vConsecionario extends Cl_vGeneral {
  private _vMoto: Cl_vMoto;
  private _vAuto: Cl_vAuto;
  private dataVehiculos: HTMLElement;
  private lblMontoTotal: HTMLElement;
  private lblComisionVendedor: HTMLElement;
  private lblPorcentajeComision: HTMLElement;
  private btAgregarMoto: HTMLElement;
  private btAgregarAuto: HTMLElement;

  constructor() {
    super({ formName: "mainForm" });
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
  set controlador(controlador: Cl_controlador) {
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
  reportarVehiculo({
    dataVehiculo,
    montoTotal,
    comisionVendedor,
    porcentajeComision,
  }: {
    dataVehiculo: iVehiculo;
    montoTotal: number;
    comisionVendedor: number;
    porcentajeComision: number;
  }): void {
    this.dataVehiculos.innerHTML += `
      <td class="colNumber">${dataVehiculo.placa}</td>
      <td class="colText">${dataVehiculo.color}</td>
      <td class="colCurrency">${`Bs.${dataVehiculo.precioBase?.toFixed(2)}`}</td>
      <td class="colNumber">${dataVehiculo.modelo ? dataVehiculo.modelo : "--"}</td>
      <td class="colCurrency">${`Bs.${montoTotal.toFixed(2)}`}</td>
      <td class="colNumber">${comisionVendedor.toString()}</td>
      <td class="colCurrency">${`Bs.${porcentajeComision.toFixed(2)}`}</td>
    `;
    this.lblMontoTotal.innerHTML = montoTotal.toFixed(2);
    this.lblComisionVendedor.innerHTML = comisionVendedor.toString();
    this.lblPorcentajeComision.innerHTML = porcentajeComision.toFixed(2);
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver });
    if (ver) {
      this.vAuto.show({ ver: false });
      this.vMoto.show({ ver: false });
    }
  }
}
