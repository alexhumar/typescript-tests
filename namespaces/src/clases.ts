/// <reference path="./Clases/Employee.ts" />
/// <reference path="./Clases/Manager.ts" />
/// <reference path="./Enums/Range.ts" />

let man = new Models.Manager('Alex', 28, Models.Enums.Rango.CEO);
let emp = new Models.Employee('Alex Emp', 28);

console.log('Manager...');
console.log(man.toString());
console.log(man.isCEO());
console.log('Employee...');
console.log(emp.toString());

//NOTA: si uso export el codigo es tomado como un modulo. Esto quiere decir que el codigo se ejecuta con un alcance propio. O sea que todo lo que
//sea declarado fuera del modulo hay que importarlo para poder usarlo.

//NOTA: Namespaces are simply named JavaScript objects in the global namespace...
//Just like namespaces, modules can contain both code and declarations. The main difference is that modules declare their dependencies....