import Cl_vVehiculo from "./Cl_vVehiculo.js";
export default class Cl_vMoto extends Cl_vVehiculo {
    constructor() {
        super({ formName: "mainForm" });
        this.divInPlacaMoto = this.crearHTMLElement({ elementName: "divInPlaca" });
        this.inPlacaMoto = this.crearHTMLInputElement({ elementName: "inPlaca" });
        this.divInColorMoto = this.crearHTMLElement({ elementName: "divInColor" });
        this.inColorMoto = this.crearHTMLInputElement({ elementName: "inColor" });
        this.divInModeloMoto = this.crearHTMLElement({ elementName: "divInModelo" });
        this.inModeloMoto = this.crearHTMLInputElement({ elementName: "inModelo" });
        this.btAceptarMoto = this.crearHTMLButtonElement({
            elementName: "btAceptarMoto",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarVehiculoMoto({
                    placa: this.placa,
                    color: this.color,
                    modelo: this.modelo
                });
            },
        });
    }
    get placa() {
        return this.inPlacaMoto.value;
    }
    get color() {
        return this.inColorMoto.value;
    }
    get modelo() {
        return this.inModeloMoto.value;
    }
    show({ ver = true } = { ver: true }) {
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
