/// <reference path='./Employee.ts' />
/// <reference path='../Enums/Range.ts' />

namespace Models {
    export class Manager extends Employee {

        public Range: Models.Enums.Rango;

        constructor(name: string, age: number, range: Models.Enums.Rango) {
            super(name, age);

            this.Range = range;
        }

        public isCEO(): boolean {
            return this.Range == Models.Enums.Rango.CEO;
        }
    }
}