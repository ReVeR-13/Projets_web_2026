import { Statut } from "../../../../lesBases";

export class StatutAnimal extends Statut {
    private static _num:number = 0;
    readonly id : string;

    private constructor(libele:string,details:string){
        super(libele,details);
        StatutAnimal._num++;
        this.id = StatutAnimal._num.toString().padStart(2,"0");
    }

    public static Create (libele: string, detail: string):StatutAnimal{
        let retval :StatutAnimal = new StatutAnimal(libele,detail);
        return retval;
    }
}