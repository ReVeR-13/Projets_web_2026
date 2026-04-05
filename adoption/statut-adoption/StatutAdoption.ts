import { Statut } from "../../../../lesBases";

export class StatutAdoption extends Statut {
    private static _num:number = 0;
    readonly id : string;

    private constructor(libele:string,details:string){
        super(libele,details);
        StatutAdoption._num++;
        this.id = StatutAdoption._num.toString().padStart(2,"0");
    }

    public static Create (libele: string, detail: string):StatutAdoption{
        let retval :StatutAdoption = new StatutAdoption(libele,detail);
        return retval;
    }
}