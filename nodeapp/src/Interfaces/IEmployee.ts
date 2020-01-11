import { IPerson } from "./IPerson";
import { Manager } from "../Clases/Manager";

export interface IEmployee extends IPerson {
    //Atributo opcional
    Boss?: Manager;
}