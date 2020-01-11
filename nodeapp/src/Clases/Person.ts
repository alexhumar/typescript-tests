import { IPerson } from "../Interfaces/IPerson";

export abstract class Person implements IPerson {
    public Name: string;
    public IsOld: boolean;

    protected _age: number = 0;

    constructor(name: string, age: number) {
        this.Name = name;
        this.Age = age;
        this.IsOld = false;
    }

    //Accessors, como en C#
    public get Age(): number {
        return this._age;
    }

    //Accessors, como en C#
    public set Age(age: number) {
        if (age > 45) { 
            this.IsOld = true;
        }
        this._age = age;
    }

    public toString(): string {
        return `Hello, my name is ${this.Name}. My old is ${this.Age}...`;
    }
}