import { Plato } from '../../models/plato.model'

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class FotoProvider{

    private platosRef = this.afd.list<Plato>('platos');

    constructor(public afd: AngularFireDatabase){ }

    addFoto(value: Plato){ 
        return this.platosRef.push(value);
    }
}
