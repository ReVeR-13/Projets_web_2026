import { Injectable } from '@nestjs/common';
import { Abri } from './Abri';

@Injectable()
export class AbriService {

    private static t_abri: Abri[] = [];

    FindAll(): Abri[] {
        return AbriService.t_abri;
    }

    FindById(id: string): Abri | string {
        let retval: Abri | string = `Cette abri [${id.padStart(2, '0')}] n'existe pas`;
        for (const n in AbriService.t_abri) {

            const element: Abri = AbriService.t_abri[n] as Abri
            if (id.padStart(2, '0') === element.id) {
                retval = element
            }

        }
        return retval;
    }

    FindByLibele(libele: string): Abri | boolean {
        let retval: Abri | boolean = false;
        for (const n in AbriService.t_abri) {

            const element: Abri = AbriService.t_abri[n] as Abri
            if (libele.toUpperCase() === element.libele.toUpperCase()) {
                retval = element
            }

        }
        return retval;
    }

    Create(abri: Abri): Abri | string {
        let newabri: Abri | undefined = undefined;
        
        if (this.FindByLibele(abri.libele) !== false) {

            newabri= Abri.Creer(abri.libele, abri.details);

            if (newabri !== undefined) {
                AbriService.t_abri.push(newabri)
            }
        }

        return newabri ? newabri : 'no abri made';
    }

    Modifier(id: string, abri: Abri): Abri | string {

        const idx: number = AbriService.t_abri.findIndex((a) => a.id === id.padStart(2, '0'));
        AbriService.t_abri[idx].Modifier(abri.libele, abri.details);
        return AbriService.t_abri[idx];

    }

    Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = AbriService.t_abri.findIndex((a) => a.id === id.padStart(2, '0'));
        if (AbriService.t_abri[idx]) {
            AbriService.t_abri.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}
