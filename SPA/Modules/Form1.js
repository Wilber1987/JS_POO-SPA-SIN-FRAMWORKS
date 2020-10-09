class Form1{
    constructor(props, Cards){
        this.type  = "form"
        this.props = props; 
        this._CargarDatos(Cards);        
    }
    _CargarDatos = (Cards)=>{
        this.props.CardSelectedItems = [];
        Cards.forEach(card => {
            console.log(this.toType(card));
            console.log(this.toType(card.id));
            console.log(this.toType(card.fecha));
            const CardI = new MyCard({id: card.id}, card);  
            this.props.CardSelectedItems[card.id] = CardI.Selected;
            this.children.push(CardI);          
        });
    }
    toType = function(obj) {
        return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
    }
    children= [];
}
class MyCard{
    constructor(props, data){
        this.type = "card";
        this.props = props;
        this.props.class = "MyCard";
        this.children = [
            {type: "label", children: [data.id]},
            {type: "p", children: [data.descripcion]},
        ]
        this.Selected = [];
        data.caracteristicas.forEach(element => {
            let idCheck = data.id + "check" + element.id;
            
            this.children.push(
                {type: "li", children:[
                    {type: "label", children: [element.id, ": "]},
                    {type: "label", props: {for: idCheck }, children: [element.descripcion]},
                    {type: "input", props: {type: "checkbox", id:idCheck,
                    onchange : ()=>{
                        this.SelectedItems(element, idCheck);
                    }}}
                ]}
            )
        });
    }
    SelectedItems = (item, idCheck)=>{
        let flag = document.getElementById(idCheck).checked;
        //console.log(flag);
        let obj = this.Selected.find(x => x == item);
        if (!obj && flag == true) {
            this.Selected.push(item);
        }else {
            this.Selected.splice(this.Selected.indexOf(obj), 1);
        }
         
    }
}
export {Form1}
