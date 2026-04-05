import { Injectable } from '@nestjs/common';
import data from '../../../Helper/contact_test.json'
import {Contact} from './Contact'

@Injectable()
export class ContactService {

    private dataJson:Contact[] = this.DataPreparation();
    private DataPreparation ():Contact[]{
        let retval:Contact[] = [];
        Object.keys(data).forEach(el =>{
            retval.push(data[el] as Contact);
        })
        return retval;
    }

    GetAll():Contact[]{
        let retVal :Contact[] = [];
        for(const n in this.dataJson ){
            const element = this.dataJson[n] as Contact
            retVal.push(element)
        }
        return retVal;
    }

    GetOne(id:string):Contact | string{
        let retval:Contact | string = `Ce contact [${id.padStart(2,'0')}] n'existe pas`;
        for(const n in this.dataJson ){

            const element :Contact = this.dataJson[n] as Contact
            if(id.padStart(2,'0') === element.idContact){
                retval = element            
            }
            
        }
        return retval;
    }

    Create(contact:Contact):Contact | string {

        const newcontact:Contact | undefined = Contact.Create(contact.nom,
        contact.prenom,
        contact.niss,
        contact.gsm,
        contact.tel,
        contact.mail,
        contact.adresse,
        contact.typeContact);

        if (newcontact !== undefined) {
            this.dataJson.push(newcontact)
        }
        
        return newcontact ? newcontact : 'no contact made';
    }

    Modifier(id:string, contact:Contact):Contact | string{

        const idx:number = this.dataJson.findIndex((contact) => contact.idContact === id.padStart(2,'0'));
        this.dataJson[idx].Modifier(contact.nom,
        contact.prenom,
        contact.niss,
        contact.gsm,
        contact.tel,
        contact.mail,
        contact.adresse,
        contact.typeContact) ;
        return this.dataJson[idx];

    }

    Supprimer(id:string):string{
        let retval = 'Suppression annulée';
        const idx:number = this.dataJson.findIndex((contact) => contact.idContact === id.padStart(2,'0'));
        if (this.dataJson[idx]) {
            this.dataJson.splice(idx,1);
            retval =`Suppression effectué`;
        }
        return retval;
    }
}
