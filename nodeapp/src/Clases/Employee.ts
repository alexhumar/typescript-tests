import * as Models from "../Interfaces/IEmployee";
import { Manager } from "./Manager";
import { Person } from "./Person";

export class Employee extends Person implements Models.IEmployee {
    
    public Boss?: Manager;

    constructor(name: string, age: number, boss?: Manager) {
        super(name, age);
        
        this.Boss = boss;
    }

    public toString(): string {
        return super.toString() + ` My boss is ${this.Boss != undefined ? this.Boss.Name : 'none'}.`;
    }
}