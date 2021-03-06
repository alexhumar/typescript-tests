/// <reference path='../Interfaces/Person.ts'/>

namespace Models {
    export class Employee implements Person {

        public Name: string;
        public Age: number;
        public IsOld: boolean;

        constructor(name: string, age: number) {
            this.Name = name;
            this.Age = age;
            this.IsOld = false;
        }

        public nowIsOld(): void {
            this.IsOld = true;
        }

        public toString(): string {
            return `Hello, my name is ${this.Name}. My old is ${this.Age}...`;
        }
    }
}