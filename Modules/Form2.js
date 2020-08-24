class Form2{
    constructor(props, Data = []){
        this.type  = "form"
        this.props = props; 
        this.props.DataForm = {};
        this.children.push(props.id);
        this.props.Insert = Data.actions.Insert; 
        this.props.Update = Data.actions.Update; 
        this.props.Delete = Data.actions.Delete; 
        this.props.Get = Data.actions.Get; 
               
        Data.structure.forEach(element => {    
            this.props.DataForm[element.Field] = null;          
            let field = {};
            field.type = "input";
            field.props = {};
            field.props.id = element.Field;
            if (element.Type.includes("int")) {
                field.props.type = "number";
            } else if (element.Type.includes("varchar")) {
                field.props.type = "text";
            } else if (element.Type.includes("date")) {
                field.props.type = "date";
            } 
            field.props.onchange = ()=>{
                this.AsignarValor(element.Field);
            }      
            let div = {type: "div", props: {class: "divForm"},
            children:[
                 element.Field, field
            ]}
            this.children.push(div);
        });
        this.children.push(
        {
            type:"button", props: {type:"button", class: "btnPrimary", onclick:()=>{
                   this.Guardar(this.props.Insert);
                }
            }, children: ["Guardar"]
        });
        this.children.push(
            {
                type:"button", props: {type:"button", class: "btnSecundary", onclick:()=>{
                       this.Guardar( this.props.Update);
                }
            }, children: ["Actualizar"]
        });
        let MyGrid = new Grid({class:"Grid", id: "Grid"+this.props.id , containerId: this.props.id}, 
        this.props.Get, this.props.DataForm);
        this.children.push(MyGrid);
    }
    children= [];
    AsignarValor = (idControl)=>{
        this.props.DataForm[idControl] = document.getElementById(idControl).value;
    }    
    Guardar = async (url)=>{
        console.log("Guardando");
        console.log(this.props.DataForm);
        const {DomClass} = await import("../Scripts/MasterTemplate.js");
        const inst = new DomClass();
        await inst.AjaxRequest(
            url,
            "success",
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        tablename: this.props.id,
                        dataForm: this.props.DataForm
                    }
                )
            }
        );
        const grid = document.getElementById("Grid"+this.props.id);
        grid.innerHTML = "";
        grid.Draw();
    }
}
class Grid {
    constructor(props, apiUrlGet = null, FormData, data = []){
        this.type = "table";       
        this.props = props; 
        this.children = [];
        this.props.apiUrlGet = apiUrlGet;
        this.props.FormData = FormData;
        this.props.data = data;
        this.props.Draw = this.Draw;        
        this.events = { load: this.Draw };     
    }
    Draw = async ()=>{
        const {DomClass} = await import("../Scripts/MasterTemplate.js");
        const {Render} = await import("../Scripts/toolComponets.js");
        const inst = new DomClass();
        const apiURL = this.props.apiUrlGet;
        let data = await inst.AjaxRequest(apiURL, "data" ,{
            method: 'POST', body: JSON.stringify({tablename:this.props.containerId})
        }); 
        if (data.lenght == 0) {
            data = this.props.data;
        }
        let tbody = { type: "tbody", props: {}, children: [] };
        let thead = { type: "thead", props: {}, children: [] };
        data.forEach((row, index = 0) => {
            let tr = { type: "tr", props: {}, children: [] }
            for (const prop in row) {
                if (index == 0) {
                    let th = { type: "th", props: {}, children: [ prop ] }
                    thead.children.push(th);
                }
                let td = { type: "td", props: {}, children: [ row[prop] ] }
                tr.children.push(td);
            }
            tr.children.push({type:"button", props: {type:"button", class: "btnPrimary", 
                onclick:()=>{this.edit(row);}},
                children: ["Edit"]
            });
            tbody.children.push(tr);
            index ++;
        });
        let table = document.getElementById(this.props.id);
        table.appendChild(Render(thead));
        table.appendChild(Render(tbody)); 
    }
    edit = (obj)=>{
        console.log(obj);    
        const formControls = document.querySelectorAll("#"+this.props.containerId+" input");        
        formControls.forEach(control => {
            if (obj[control.id]) {
                control.value = obj[control.id];
                this.props.FormData[control.id] = obj[control.id];
            }
        });
    }
}
export {Form2}
