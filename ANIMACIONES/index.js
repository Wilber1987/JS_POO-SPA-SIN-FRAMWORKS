
export default function myFun() {
    //code
}
import mF from './ubicacion/myFuncModule.js';
mF();

function myFun() { 

}
class myClass {

}
let myVar = "value";

export { myFun, myClass, myVar }

import { myClass } from './myModule.js';
import { myFun } from './myModule.js';
import { myVar } from './myModule.js';


const myFun = async () => {
    const { myClass } = await import('./myModule.js');
    //continuar con el código
}

import "./myModule.js";
