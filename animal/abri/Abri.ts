export class Abri{

    readonly id:string;
    readonly date: string;

    libele:string;
    details:string;

    private static num :number = 0;
    private constructor(libele:string,details:string){
        Abri.num ++;
        const dte = new Date();
        this.date = dte.toDateString();
        this.libele = libele;
        this.details = details;

        this.id = Abri.num.toString().padStart(2,'0')
    }

    public Modifier(libele:string,details:string):Abri{
        this.libele = libele;
        this.details = details;
        return this;
    }

    public static Creer(libele:string,details:string):Abri{

        let retval:Abri = new Abri(libele,details)
        return retval;
    }
}