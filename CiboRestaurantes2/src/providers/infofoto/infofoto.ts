import { InfofotoModel } from '../../models/infofoto.model'

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class InfofotoProvider{

    private infofotoRef = this.afd.list<InfofotoModel>('fotosComidas');

    constructor(public afd: AngularFireDatabase){ }

    addFotoInfo(value: InfofotoModel){ 
        return this.infofotoRef.push(value);
    }
    getFotoInfo(){
        return this.infofotoRef;
    }

}
