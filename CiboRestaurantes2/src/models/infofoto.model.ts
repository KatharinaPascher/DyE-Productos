export class InfofotoModel {
    key?: string;//manejará el id cuando se utiliza firebase 
    name:string;

    vegan:boolean;
    glutenfree:boolean; 
    vegetarian:boolean;

    fastfood:boolean;
    italian:boolean;
    texmex:boolean;
    asian:boolean;
    mediterranean:boolean;

    price:number;

    fotoid:string;

    userid:string;

    constructor(){
    this.name='';
    this.vegan=false;
    this.glutenfree=false; 
    this.vegetarian=false;

    this.fastfood=false;
    this.italian=false;
    this.texmex=false;
    this.asian=false;
    this.mediterranean=false;

    this.price=0;

    this.fotoid='';

    this.userid='';
    }
}