import { Statut } from "../../../../lesBases";

export class StatutDemande extends Statut {
    private static _num:number = 0;
    readonly id : string;

    private constructor(libele:string,details:string){
        super(libele,details);
        StatutDemande._num++;
        this.id = StatutDemande._num.toString().padStart(2,"0");
    }

    public static Create (libele: string, detail: string):StatutDemande{
        let retval :StatutDemande = new StatutDemande(libele,detail);
        return retval;
    }
}