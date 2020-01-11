import * as Models from "../Clases/Employee";
import * as Enums from "../Enums/Rango";
import { Clase } from "../Enums/Clase";

export class Manager extends Models.Employee {
    public Clase: Clase;

    //Range, al tener modificador de acceso, se declara como property de la clase Manager
    //y se inicializa con el valor que se le pasa al parametro.
    constructor(name: string, age: number, public Range: Enums.Rango) {
        super(name, age);

        //Ejemplo simple de switch...
        switch (age % 2) {
            case 0:
                this.Clase = Clase.A;
                break;
            case 1:
                this.Clase = Clase.B;
                break;
            default:
                this.Clase = Clase.C;
                break;
        }
    }

    public isCEO(): boolean {
        return this.Range == Enums.Rango.CEO;
    }

    public toString(): string {
        return super.toString() + ` I am ${!this.isCEO() ? 'not ' : ''}the CEO!`;
    }
}