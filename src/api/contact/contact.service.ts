import { Injectable } from '@nestjs/common';
import * as data from '../../../Helper/contact_test.json'

@Injectable()
export class ContactService {

    GetAll(){
        let retVal = data;
        console.log(data);
        
        return retVal;
    }

    GetOne(id:string):string{
        let retval:string = `${id}`
        return retval;
    }

    Create(data:any){
        return 'creation';
    }
}
