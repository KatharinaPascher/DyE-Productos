import { Tarea } from "../models/tarea.model";

export class TareaService{
    private tareas: Tarea []= [
        {
            "tarea":"Hacer la práctica optativa de DEPI",
            "fecha":"10 de abril",
            "lugar":"UC3M",
            "prioridad":"1"
        }
    ];

    constructor(){ }

    addTarea(value: Tarea){ 
        this.tareas.push(value); 
    }

    getTarea(){ 
        return this.tareas; 
    }

}