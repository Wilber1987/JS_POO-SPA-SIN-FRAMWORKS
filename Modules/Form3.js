class Form3{
    constructor(props){
        this.type  = "form"
        this.props = props; 
    }
    children= [
        { type: 'h2', props: {id:"", class: ""} ,
            children: ["My Form 3"]
        },
        { type: 'h3', props: {id:"", class: ""} ,
            children: ["Usuario"]
        },
        { type: 'input', props: {id:"txtUsua", class: "",
         placeholder: "usuario", type: "text"} ,
            children: []
        },
        { type: 'h3', props: {id:"", class: ""} ,
            children: ["Contraseña"]
        },
        { type: 'input', props: {id:"txtpass", class: "",
         placeholder: "password", type: "text"} ,
            children: []
        }     
    ]
}
export {Form3}