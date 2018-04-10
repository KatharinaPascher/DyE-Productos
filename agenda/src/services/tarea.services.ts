import { Tarea } from "../models/tarea.model";

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class TareaService{

    private tareasRef = this.afd.list<Tarea>('tareas');

    constructor(public afd: AngularFireDatabase){ }

    addTarea(value: Tarea){ 
        return this.tareasRef.push(value);
    }

    getTareas(){ 
        return this.tareasRef; 
    }

    updateTareas(value: Tarea){
        return this.tareasRef.update(value.key, value);
    }
    
    removeTareas(value: Tarea){
        return this.tareasRef.remove(value.key);
    }

}