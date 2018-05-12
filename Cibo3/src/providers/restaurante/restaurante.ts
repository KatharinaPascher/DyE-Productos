import { Restaurante } from '../../models/restaurante.model'

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../app/app.module';
import firebase from 'firebase';

@Injectable()
export class RestauranteProvider{

    private restaurantesRef = this.afd.list<Restaurante>('restaurantes');

    constructor(public afd: AngularFireDatabase){ }

    addRestaurante(value: Restaurante){ 
        return this.restaurantesRef.push(value);
    }
    getRestaurante(user: string){
        /*Falta mejorar esto*/
        console.log(this.afd.database.ref('restaurantes').orderByChild('user').equalTo(user).toString);

        return this.afd.database.ref('restaurantes').orderByChild('user').equalTo(user);
    }
}
