import Cl_vVehiculo from "./Cl_vVehiculo.js";
export default class Cl_vAuto extends Cl_vVehiculo {
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
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarVehiculoAuto({
                    placa: this.placa,
                    color: this.color,
                    precioBase: this.precioBase
                });
            },
        });
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    get placa() {
        return this.inPlacaInput.value;
    }
    get color() {
        return this.inColorInput.value;
    }
    show({ ver = true } = { ver: true }) {
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
