import { Render } from "./toolComponets.js";
class DomClass{
    constructor() {              
    }
    NavForm = [];
    AjaxRequest = async (url = null, prop = null, data = {})=>{
        if (url == null) {
            return [];
        }        
        let response = await fetch(url, data);
        response = await response.json();
        return response[prop];
    }
    Navegando = async (url, id, apiURL = null, prop = null, instName, actions = {})=>{  
        const Model = await this.AjaxRequest(apiURL, prop, {
            method: "POST", body: JSON.stringify({tablename:id})
        });
        const DataForm = {
            actions: actions,
            structure: Model
        }
        const MyContainer = document.querySelector("#MyContainer");
        let nodes = MyContainer.querySelectorAll("form"); 
        nodes.forEach(node => {
            if (node.id != id) {
                this.NavForm[node.id] = node;
                MyContainer.removeChild(node);
            }
        });
        if (typeof this.NavForm[id] !== "undefined") {
             MyContainer.append(this.NavForm[id]);
             return;
        }
        const ObjNav = await import(url);
        const ObjNavInstance = new ObjNav[instName]({id: id}, DataForm);
        const MyForm = Render(ObjNavInstance);  
        this.NavForm[id] = MyForm;
        MyContainer.append(MyForm);
        return;
    }
}
class MyContainer extends DomClass{
    constructor() {
        super();
        this.type= "div";
        this.header = new MyHeadear();
        this.nav = new MyNav();
        this.main = new MyMain({id:"MyContainer"});
        this.footer = new MyFooter();
        this.props = {class: "container"};
        this.children= [
            this.header, this.nav, this.main, this.footer
        ];
    }
}
class MyHeadear extends DomClass{
    constructor() {
        super();
        this.type= "header";
        this.children = [
            "My Header"
        ]
    }
}
class MyNav extends DomClass{
    constructor() {
        super();
        this.type= "nav";
        this.children = [
            {
                type: "ul", props: {class: "MyNav"},
                    children: [
                        { type: "li", props:{onclick: ()=>{ 
                            const apiURL = "http://localhost/MYPROYECT/Api/ApiCards.php";
                            this.Navegando("../modules/Form1.js","Form1", apiURL, "Cards","Form1");
                        }
                    }, children: ["Form 1"]},
                        { type: "li", props:{onclick: ()=>{
                            const apiURL = "http://localhost/MYPROYECT/Api/CatForm2.php/?function=GetModel";
                            const actions = {
                                Insert:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Insert",
                                Get:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Get",
                                Update:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Update",
                                Delete:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Delete"
                            }
                            this.Navegando("../modules/Form2.js","form", apiURL, "Form", "Form2",actions);
                        }
                    }, children: ["Form 2"]},
                        { type: "li", props:{onclick: ()=>{ 
                            const apiURL = "http://localhost/MYPROYECT/Api/CatForm2.php/?function=GetModel";
                            const actions = {
                                Insert:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Insert",
                                Get:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Get",
                                Update:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Update",
                                Delete:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Delete"
                            }
                            this.Navegando("../modules/Form2.js","tblform1", apiURL, "Form", "Form2",actions);
                        }
                    }, children: ["Form 3"]},
                    { type: "li", props:{onclick: ()=>{ 
                        const apiURL = "http://localhost/MYPROYECT/Api/CatForm2.php/?function=GetModel";
                        const actions = {
                            Insert:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Insert",
                            Get:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Get",
                            Update:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Update",
                            Delete:  "http://localhost/MYPROYECT/Api/CatForm2.php/?function=Delete"
                        }
                        this.Navegando("../modules/Form2.js","tblform2", apiURL, "Form", "Form2",actions);
                    }
                }, children: ["Form 4"]}
                ]
            }
        ];
    }
}
class MyMain extends DomClass{
    constructor(props) {
        super();
        this.type= "main";
        this.props = props;
    }
}
class MyFooter extends DomClass{
    constructor() {
        super();
        this.type= "footer";
    }
}
export {MyContainer, DomClass}

