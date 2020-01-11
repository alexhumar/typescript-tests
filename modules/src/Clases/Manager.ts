import * as Models from "../Clases/Employee";
import * as Enums from "../Enums/Rango";

export class Manager extends Models.Employee {

    public Range: Enums.Rango;

    constructor(name: string, age: number, range: Enums.Rango) {
        super(name, age);

        this.Range = range;
    }

    public isCEO(): boolean {
        return this.Range == Enums.Rango.CEO;
    }
}