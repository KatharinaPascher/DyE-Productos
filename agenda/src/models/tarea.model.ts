export interface Tarea {
    key?: string;//manejará el id cuando se utiliza firebase 
    tarea: string; 
    fecha: string; 
    lugar: string; 
    prioridad: string; 
}