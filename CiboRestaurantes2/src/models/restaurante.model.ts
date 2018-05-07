export interface Restaurante {
    key?: string;//manejará el id cuando se utiliza firebase 
    nombre: string; 
    descripcion: string; 
    telefono: string; 
    correo: string; 
    sitioweb: string;
    direccion: string;
    foto_id:string;
    lat: string;
    long: string;
    user: string;
}