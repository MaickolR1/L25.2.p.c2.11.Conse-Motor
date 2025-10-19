import Cl_vVehiculo from "./Cl_vVehiculo.js";
interface iMoto {
  placa: string;
  color: string;
  modelo: string;
}

export default class Cl_vMoto extends Cl_vVehiculo {
  private divInPlacaMoto: HTMLElement;
  private inPlacaMoto: HTMLInputElement;
  private divInColorMoto: HTMLElement;
  private inColorMoto: HTMLInputElement;
  private divInModeloMoto: HTMLElement;
  private inModeloMoto: HTMLInputElement;
  private btAceptarMoto: HTMLElement;
  constructor() {
    super({ formName: "vehiculoForm" });
    this.divInPlacaMoto = this.crearHTMLElement({ elementName: "divInPlaca" });
    this.inPlacaMoto = this.crearHTMLInputElement({ elementName: "inPlaca" });
    this.divInColorMoto = this.crearHTMLElement({ elementName: "divInColor" });
    this.inColorMoto = this.crearHTMLInputElement({ elementName: "inColor" });
    this.divInModeloMoto = this.crearHTMLElement({ elementName: "divInModelo" });
    this.inModeloMoto = this.crearHTMLInputElement({ elementName: "inModelo" });
    this.btAceptarMoto = this.crearHTMLButtonElement({
      elementName: "btAceptarMoto",
      onclick: () => this.controlador?.procesarVehiculoMoto({
        placa: this.placa,
        color: this.color,
        modelo: this.modelo
      }),
    });
  }
  get placa(): string {
    return this.inPlacaMoto.value;
  }
  get color(): string {
    return this.inColorMoto.value;
  }
  get modelo(): string {
    return this.inModeloMoto.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Moto" });
    this.inPlacaMoto.value = "";
    this.divInPlacaMoto.hidden = ver === false;
    this.inColorMoto.value = "";
    this.divInColorMoto.hidden = ver === false;
    this.inModeloMoto.value = "";
    this.divInModeloMoto.hidden = ver === false;
    this.btAceptarMoto.hidden = ver === false;
  }
}
export { iMoto };