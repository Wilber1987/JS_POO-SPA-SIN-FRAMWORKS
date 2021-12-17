import {WRender} from "../WModules/WComponentsTools.js";
import {WCssClass} from "../WModules/WStyleRender.js";
class WCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.shadowRoot.append(WRender.createElement({
            type: "w-style",
            props: {
                ClassList: [
                    new WCssClass(".card",{
                        width: "90%",
                        height: "200px",
                        display: "block",
                        border: "2px solid #999999",
                        margin: "5px",
                        "border-radius": "0.2cm",
                        overflow: "hidden",
                    }), new WCssClass(".title", {
                        "background-color": "#999999",
                        display: "block",
                        padding: "10px",
                        color: "#fff",
                        "font-family": "arial",
                        "font-weight": "bold",
                        "font-size": "1.3rem"
                    })
                ]
            }
        }))
        this.shadowRoot.append(this.DrawCard());
    }
    DrawCard() {        
        return WRender.createElement({
            type: "div", props: { className: "card" },
            children: [
                { type: "label", props: { className: "title", innerText: this.element.title }},
                { type: "section", props: { innerText: this.element.Contain } },
                { type: "section", props: { innerText: this.element.Detail } },
            ]
        });    
    }
}
customElements.define("w-card", WCardComponent);
