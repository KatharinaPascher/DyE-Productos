import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Contacto } from "../models/contacto.model";

@Injectable()
export class ContactService{

    private contactosRef = this.afb.list<Contacto>('contactos');

    constructor(private afb : AngularFireDatabase){
    }

    addContact(value: Contacto){ 
        return this.contactosRef.push(value); 
    }

    getContacts(){ 
        return this.contactosRef;
    }

    updateContact(value: Contacto){
        return this.contactosRef.update(value.key, value);
    }
    
    removeContact(value: Contacto){
        return this.contactosRef.remove(value.key);
    }
}