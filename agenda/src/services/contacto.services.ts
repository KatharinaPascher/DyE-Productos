import { Contacto } from "../models/contacto.model";

export class ContactService{
    private contacts: Contacto []= [
        {
            "nombre":"Andres",
            "organizacion":"UC3M",
            "movil":"666666666",
            "correo":"andres@example.com"
        },
        {
            "nombre":"Carlos Fontaseca",
            "organizacion":"Ships&Boats",
            "movil":"+344535435345",
            "correo":"cfontaeca@cbcorp.com"
        },
        {
            "nombre":"Juan Camaño",
            "organizacion":"Big Motors",
            "movil":"+3423443234234",
            "correo":"jcamaño@bgmor.com"
        }
    ];

    constructor(){ }

    addContact(value: Contacto){ 
        this.contacts.push(value); 
    }

    getContacts(){ 
        return this.contacts; 
    }

}