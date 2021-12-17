import { WRender } from "./WDevCore/WModules/WComponentsTools.js";
import "./WDevCore/WComponents/CardComponents.js";
import { MainTemplate } from "./Components/MasterTemplate.js";

window.onload = async () => {   
    MyApp.append(WRender.createElement(new MainTemplate()));
}
