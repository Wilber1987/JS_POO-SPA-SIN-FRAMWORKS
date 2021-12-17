import { WRender } from "../WDevCore/WModules/WComponentsTools.js";
import { WCssClass } from "../WDevCore/WModules/WStyleRender.js";
class WFormJs extends HTMLElement {
    constructor(ModelObject, Save) {
        super();
        this.ModelObject = ModelObject ?? {};
        this.Object = {};
        this.Save = Save;
        this.FormContainer = WRender.createElement({
            type: "div", props: { className: "FormContainer" }
        });
        this.append(WRender.createElement({ type:'w-style',
         props: {id: '', ClassList: [
            new WCssClass(`.FormContainer`, {
                display: 'flex',
                "flex-direction": "column"
            }), new WCssClass( `.ControlInput`, {
                padding: "10px",
                border: "solid 2px #eee",
                width: "calc(100% - 20px)",
                "margin-bottom": "10px"
            }), new WCssClass( `.BtnInput`, {
                padding: '10px',
                boder: "none",
                color: "#fff",
                "background-color": "#4be"
            }),
        ]}}));
    }
    connectedCallback() { this.DrawComponent(); }
    DrawComponent = async () => {
        if (this.FormContainer.innerHTML != "") {
            return;
        }
        for (const prop in this.ModelObject) {
            this.Object[prop] = null;
            const Control = WRender.createElement({
                type: 'input', props:
                {
                    class: 'ControlInput', placeholder: prop, 
                     onchange: (ev) => {
                        this.Object[prop] = ev.target.value;
                    }
                }
            });
            this.FormContainer.append(Control);
        }
        const Btn = WRender.createElement({
            type: 'input', props:
            {
                type: "button", class: 'BtnInput', value: "Save", onclick: (ev) => {
                   for (const prop in this.Object) {
                       if (this.Object[prop] == null) {
                           alert(`El dato ${prop} es requerido`);
                           return;
                       }
                   }
                    if (this.Save) {
                       this.Save(this.Object);
                   }
                   console.log(this.Object);
                }
            }
        });
        this.FormContainer.append(Btn);
        this.append(this.FormContainer);
    }
}
customElements.define('w-form', WFormJs);
export { WFormJs }