import { Animal, Contact } from "@api/contact";
import { TypeDemande } from "./index";
import { StatutDemande } from "./statut-demande/StatutDemande";

export class Demande{

    readonly id:string;
    readonly dateOuverture:Date;

    dateFermerture?:Date | undefined;
    protected animal? : Animal| undefined;
    contact :Contact;
    type:TypeDemande;
    statut:StatutDemande;
    details:string;

    private static num:number = 0;
    private constructor(contact:Contact,type:TypeDemande,statut:StatutDemande,details:string){
        const dte = new Date();
        Demande.num++;
        this.id = Demande.num.toString().padStart(2,'0');
        this.dateOuverture = dte;
        this.contact = contact;
        this.type = type;
        this.statut = statut;
        this.details = details;

        this.animal = undefined;
        this.dateFermerture = undefined;
    }

    public Modifier(contact:Contact,type:TypeDemande,statut:StatutDemande,details:string):Demande{
        this.contact = contact;
        this.type = type;
        this.statut = statut;
        this.details = details;

        return this;
    }

    public Animal(animal:Animal){
        this.animal = animal;
    }

    public static Creer (contact:Contact,type:TypeDemande,statut:StatutDemande,details:string):Demande | undefined{
        let retval :Demande | undefined = undefined
        retval = new Demande(contact,type,statut,details);
        return retval;
    }
}