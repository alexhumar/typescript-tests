import { Employee as Empleado } from "./Clases/Employee";
import { Manager } from "./Clases/Manager";
import { Rango } from "./Enums/Rango";
import * as _ from 'lodash';
import { IArray } from "./Interfaces/IArray";
import { IPerson } from "./Interfaces/IPerson";
import { ScientificCalculator } from "./Clases/ScientificCalculator";

let man = new Manager('Alex', 38, Rango.CEO);
let emp = new Empleado('Raul', 29, man);
let empleados: IArray<IPerson> = [man, emp];

//(str1: string, str2: string, str3?: string) => string esta declarando el tipo de la function. str3 es opcional...
//Al declarar la function el nombre de los parametros no hace falta que sea igual al nombre que se les puso en el tipo.
//Al asignar un string default al tercer parametro, se lo considera opcional...
let concatString: (str1: string, str2: string, str3?: string) => string = 
        function (str: string, str2: string, stropc: string = " palabras"): string
        { 
            return str + str2 + stropc;
        }

//El segundo parametro denota, con los ..., que hay un numero indefinidos de parametros de tipo string
let buildName: (str1: string, ...names: string[]) => string = 
        function (str1: string, ...names: string[]): string {
            return str1 + " " + names.join(" ");
        };

//T tiene que ser IPerson, sino el compilador advierte.
let nameLogger: <T extends IPerson>(arg1: T) => void = function (x) {
    console.log(x.toString());
}

//Type Guards...
function isString(value: string | number): value is string {
    //Un chequeo similar se puede hacer con interfaces por ejemplo.
    return typeof value === "string";
}

function logValue(value: string | number): void {
    //Type Guards son expresiones que realizan un chequeo que garantiza el tipo de una variable en un determinado scope...
    if (isString(value)){
        console.log(`Soy string, me dicen... ${value.slice(0,2)}.`);
    } else {
        console.log(`No soy string, por lo que soy number... ${value.toExponential()}.`);
    }

    //Pero tambien funcionan directo. Aca tambien se aplican type guards:
    //NOTA: These typeof type guards are recognized in two different forms: typeof v === "typename" and typeof v !== "typename", where "typename" 
    //must be "number", "string", "boolean", or "symbol". While TypeScript won’t stop you from comparing to other strings, the language won’t 
    //recognize those expressions as type guards.
    if (typeof value === "string") {
        console.log(value.search("PE"));
    } else {
        console.log(value.toFixed());
    }
}

console.log(concatString("USO DE LODASH... ", "Concatenado"));
_.forEach(empleados, nameLogger);
console.log(concatString("ALGUNOS PRINTS ADICIONALES...", "Concatenando ", "frases"));
console.log('Manager...');
nameLogger(man);
console.log(man.isCEO());
console.log('Employee...');
nameLogger(emp);
//Duck typing. Por mas que el objeto no declare implementar IPerson, tiene todos sus miembros. Por eso,
//el compilador lo permite como IPerson.
nameLogger({ Age: 32, Name: 'Duck', toString: function() { return 'Duck Typing. Cuak!!'}});
console.log(buildName("Alex", "Ruben", "Humar"));
//Type guards
logValue("PEPE");
logValue(456);
//Ejemplo de polimorphic this types.
//Without this types, ScientificCalculator would not have been able to extend BasicCalculator and keep the fluent interface. 
//multiply would have returned BasicCalculator, which doesn’t have the sin method.
//However, with this types, multiply returns this, which is ScientificCalculator here.
console.log(new ScientificCalculator(5).multiply(2).sin().add(4).currentValue());
//For in (recorre indices)...
let a: number[] = [16, 22, 46];
for (let i in a ) {
    console.log(i);
}
//y for of (recorre elementos)...
for (let num of a) {
    console.log(num);
}