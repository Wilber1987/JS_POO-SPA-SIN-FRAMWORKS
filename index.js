const OnLoad = async ()=>{  
    const {Render} = await import("./Scripts/toolComponets.js")
    const {MyContainer} = await import("./Scripts/MasterTemplate.js")
    const Contenedor = new MyContainer();
    myRoot.append(Render(Contenedor));    
}
window.onload = OnLoad;