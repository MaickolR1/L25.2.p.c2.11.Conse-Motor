export default class Cl_vGeneral {
    constructor({ elementName }) {
        this._elementName = "";
        this._vista = null;
        this._controlador = null;
        this.elementName = elementName;
        this.vista = this.crearHTMLElement({
            elementName: this.elementName,
            isForm: true,
        });
    }
    set elementName(elementName) {
        this._elementName = elementName;
    }
    get elementName() {
        return this._elementName;
    }
    set vista(vista) {
        this._vista = vista;
    }
    get vista() {
        return this._vista;
    }
    set controlador(controlador) {
        this._controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    crearHTMLElement({ elementName, isForm = false, }) {
        let domElementName = isForm
            ? elementName
            : `${this.elementName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    }
    crearHTMLInputElement({ elementName, }) {
        let domElementName = `${this.elementName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    }
    crearHTMLButtonElement({ elementName, onclick, }) {
        let domElementName = `${this.elementName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        if (onclick)
            domElement.onclick = onclick;
        return domElement;
    }
    show({ ver = true } = { ver: true }) {
        if (this.vista)
            this.vista.style.display = ver ? "flex" : "none";
    }
}
