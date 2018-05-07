import { Restaurante } from '../../models/restaurante.model'

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class RestauranteProvider{

    private restaurantesRef = this.afd.list<Restaurante>('restaurantes');

    constructor(public afd: AngularFireDatabase){ }

    addRestaurante(value: Restaurante){ 
        return this.restaurantesRef.push(value);
    }
}
