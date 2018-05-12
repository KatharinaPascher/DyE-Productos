export class Favs {
    
    favslist:number[];//=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    constructor(){
        
    }

    addFav(i:number){
        this.favslist.push(i);
    }

    getFavs(){
        return this.favslist;
    }
}