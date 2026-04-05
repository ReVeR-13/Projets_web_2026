import { Type } from "../../../../lesBases";

export class TypeDemande extends Type {
    private static _num:number = 0;
    readonly id : string;

    private constructor(libele:string,details:string){
        super(libele,details);
        TypeDemande._num++;
        this.id = TypeDemande._num.toString().padStart(2,"0");
    }

    public static Create (libele: string, detail: string):TypeDemande{
        let retval :TypeDemande = new TypeDemande(libele,detail);
        return retval;
    }
}