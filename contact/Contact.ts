import { TypeContact } from "./type-contact/TypeContacte";

export class Contact{

    readonly idContact:string;
    readonly dateCreation:string;
    nom:string;
    prenom:string;
    niss:string;
    gsm:string;
    tel:string;
    mail:string;
    adresse:string;
    typeContact:TypeContact;

    private static _num :number = 3;

    private constructor(nom:string,prenom:string,niss:string,gsm:string,tel:string,mail:string,adresse:string,type:TypeContact){
        Contact._num++;
        const dte = new Date();
        this.idContact = Contact._num.toString().padStart(2,'0');
        this.dateCreation = dte.toLocaleString();
        this.nom = nom;
        this.prenom = prenom;
        this.niss = niss;
        this.gsm = gsm;
        this.tel = tel;
        this.mail = mail;
        this.adresse = adresse;
        this.typeContact = type;
    }

    public static Create(nom:string,prenom:string,niss:string,gsm:string,tel:string,mail:string,adresse:string,type:TypeContact):Contact | undefined{
        let retVal :Contact | undefined = undefined;
        retVal = new Contact(nom,prenom,niss,gsm,tel,mail,adresse,type)
        return retVal; 
    }
        
    public Modifier(nom:string,prenom:string,niss:string,gsm:string,tel:string,mail:string,adresse:string,type:TypeContact) :Contact{
        this.nom = nom;
        this.prenom = prenom;
        this.niss = niss,
        this.gsm = gsm,
        this.tel = tel,
        this.mail = mail,
        this.adresse = adresse
        this.typeContact = type;

        return this;
    }
}