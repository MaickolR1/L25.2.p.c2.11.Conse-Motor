import Cl_vVehiculo from "./Cl_vVehiculo.js";
interface iAuto {
  placa: string;
  color: string;
  precioBase: number;
}

export default class Cl_vAuto extends Cl_vVehiculo {
  private divInPlaca: HTMLElement;
  private inPlacaInput: HTMLInputElement;
  private divInColorDiv: HTMLElement;
  private inColorInput: HTMLInputElement;
  private divInPrecioBase: HTMLElement;
  private inPrecioBase: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInPlaca = this.crearHTMLElement({ elementName: "divInPlaca" });
    this.inPlacaInput = this.crearHTMLInputElement({ elementName: "inPlaca" });
    this.divInColorDiv = this.crearHTMLElement({ elementName: "divInColor" });
    this.inColorInput = this.crearHTMLInputElement({ elementName: "inColor" });
    this.divInPrecioBase = this.crearHTMLElement({ elementName: "divInPrecioBase" });
    this.inPrecioBase = this.crearHTMLInputElement({ elementName: "inPrecioBase" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarVehiculo",
      onclick: () => this.controlador?.procesarVehiculoAuto({
        placa: this.placa,
        color: this.color,
        precioBase: this.precioBase
      }),
    });
  }
  get precioBase(): number {
    return +this.inPrecioBase.value;
  }
  get placa(): string {
    return this.inPlacaInput.value;
  }
  get color(): string {
    return this.inColorInput.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Auto" });
    this.inPlacaInput.value = "";
    this.divInPlaca.hidden = ver === false;
    this.inColorInput.value = "";
    this.divInColorDiv.hidden = ver === false;
    this.inPrecioBase.value = "";
    this.divInPrecioBase.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iAuto };
