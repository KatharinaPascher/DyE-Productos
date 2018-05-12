export class Preferences {
    vegan:boolean;
    glutenfree:boolean; 
    vegetarian:boolean;

    fastfood:boolean;
    italian:boolean;
    texmex:boolean;
    asian:boolean;
    mediterranean:boolean;

    price:number;
    distance:number;

    constructor(){
        this.vegan=false;
        this.glutenfree=false; 
        this.vegetarian=false;
    
        this.fastfood=false;
        this.italian=false;
        this.texmex=false;
        this.asian=false;
        this.mediterranean=false;
    
        this.price=100;
        this.distance=0;
    }
}