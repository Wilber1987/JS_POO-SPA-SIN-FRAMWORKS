class WRender {
    static createElement = (Node) => {
        try {
            if (typeof Node === "undefined" || Node == null) {
                return document.createTextNode("Nodo nulo o indefinido.");
            } else if (typeof Node === "string" || typeof Node === "number") {
                return document.createTextNode(Node);
            } else if (Node.__proto__ === HTMLElement.prototype  
              || Node.__proto__.__proto__ === HTMLElement.prototype) {
                return Node;
            } else {
                const element = document.createElement(Node.type);
                if (Node.props != undefined && Node.props.__proto__ == Object.prototype) {
                    for (const prop in Node.props) {
                        if (prop == "class") element.className = Node.props[prop];
                        else element[prop] = Node.props[prop];
                    }
                }
                if (Node.children != undefined && Node.children.__proto__ == Array.prototype) {
                    Node.children.forEach(Child => {
                        element.appendChild(this.createElement(Child));
                    });
                }                
                return element;
            }
        } catch (error) {
            console.log(error, Node);
            return document.createTextNode("Problemas en la construcción del nodo.");
        }
    }   
    static createElementNS = (node, uri = "svg") => {
        try {
            let URI = null;
            switch (uri) {
                case "svg":
                    URI = "http:\/\/www.w3.org/2000/svg";
                    break;
                case "html":
                    URI = "http://www.w3.org/1999/xhtml";
                    break;
                case "xbl":
                    URI = "http://www.mozilla.org/xbl";
                    break;
                case "xul":
                    URI = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
                    break;
                default:
                    URI = null;
                    break;
            }
            const element = document.createElementNS(URI, node.type)
            if (node.props) {
                for (const prop in node.props) {
                    if (typeof node.props[prop] === "function") {
                        element[prop] = node.props[prop];
                    } else if (typeof node.props[prop] === 'object') {
                        element[prop] = node.props[prop];
                    } else {
                        try {
                            element.setAttributeNS(null, prop, node.props[prop])
                        } catch (error) {
                            element.setAttributeNS(URI, prop, node.props[prop]);
                        }
                    }
                }
            }
            if (node.children) {
                node.children
                    .map(this.createElementNS)
                    .forEach(child => element.appendChild(child, uri))
            }
            return element;
        } catch (error) {

        }
    }   
    static CreateStringNode = (string) => {
        let node = document.createRange().createContextualFragment(string);        
        return node.childNodes[0];
    }
}
class ComponentsManager{
    constructor(){
        this.type = "div";
        this.props = {
            class: "MyDiv",
        };
        this.DomComponents = [];
    }
    NavigateFunction = async (IdComponent, ComponentsInstance, ContainerName) => {
        const ContainerNavigate = document.querySelector("#" + ContainerName);
        let Nodes = ContainerNavigate.querySelectorAll(".DivContainer");   
        Nodes.forEach((node) => {
            if (node.id != IdComponent) {               
                this.DomComponents[node.id] = node;
                if (ContainerNavigate.querySelector("#" + node.id)) {
                    ContainerNavigate.removeChild(node);
                }
            }
        });
        if (!ContainerNavigate.querySelector("#" + IdComponent)) {
            if (typeof this.DomComponents[IdComponent] != "undefined") {
                ContainerNavigate.append(this.DomComponents[IdComponent]);
                return;
            } else {               
                const NewChild = WRender.createElement(ComponentsInstance);
                NewChild.id = IdComponent;
                NewChild.className = NewChild.className + " DivContainer";
                this.DomComponents[IdComponent] = NewChild;
                ContainerNavigate.append(NewChild);
                return;
            } 
        }
    }
}
export { WRender, ComponentsManager }