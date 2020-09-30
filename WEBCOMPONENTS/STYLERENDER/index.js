let myStyle = document.createElement("w-style");
myStyle.ClassList = [
    new WCssClass("#myDiv",{
        background: "red",
        height: "300px",
        width:"200px",
    }),
    new WCssClass(".myDiv",{
        background: "blue",
        height: "200px",
        width:"200px",
    }),
    new WCssClass(".myDiv:hover",{
        background: "blue",
        height: "300px",
        width:"300px",
    }),
];
window.addEventListener("load", ()=>{
    myRoot.append(myStyle);
})