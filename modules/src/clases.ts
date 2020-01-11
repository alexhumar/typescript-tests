import { Employee as Empleado } from "./Clases/Employee";
import { Manager } from "./Clases/Manager";
import { Rango } from "./Enums/Rango";

let man = new Manager('Alex', 28, Rango.CEO);
let emp = new Empleado('Alex Emp', 28);

console.log('Manager...');
console.log(man.toString());
console.log(man.isCEO());
console.log('Employee...');
console.log(emp.toString());

//NOTA: si uso export el codigo es tomado como un modulo. Esto quiere decir que el codigo se ejecuta con un alcance propio. O sea que todo lo que
//sea declarado fuera del modulo hay que importarlo para poder usarlo.

//NOTA: Namespaces are simply named JavaScript objects in the global namespace...
//Just like namespaces, modules can contain both code and declarations. The main difference is that modules declare their dependencies....

//EL JS RESULTANTE DE ESTO NO CORRE... TODAVIA NO SE POR QUE...