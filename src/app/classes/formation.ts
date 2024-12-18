import { Commentaire } from "./commentaire";

export class Formation {
    constructor(
        public id:number,
        public name:string,
        public description:string,
        public photo:string,
        public date:Date,
        public price:number,
        public nbParticipant : number,
        public certif : boolean,
        public workshop : boolean,
        public location : string,            
        public comments : Commentaire[],
    ){}
}

