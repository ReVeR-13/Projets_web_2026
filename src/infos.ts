import { color } from "../Helper/help_color";

export class Infos{
    static General(){
        const ligne:string = `-----------------------------------------`;
        
        console.log('\n'+ligne);
        console.log(`${color.green('[App. Port]')}  : ${color.yellow('http://localhost:3200')} `);
        console.log(`${color.green('[SwaggerUI]')}  : ${color.yellow('http://localhost:3200/docs')} `);
        console.log(ligne +'\n');
        
    }
}