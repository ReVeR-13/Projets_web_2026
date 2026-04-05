import { Injectable } from '@nestjs/common';
import { StatutAdoption } from './StatutAdoption';

@Injectable()
export class StatutAdoptionService {

    private static t_statut: StatutAdoption[] = [];

    public FindAll(): StatutAdoption[] {
        return StatutAdoptionService.t_statut;
    }

    public FindUn(id: string): StatutAdoption | string {
        let retval: StatutAdoption | string = `Cet statut [${id.padStart(2, '0')}] n'existe pas`;
        for (const n in StatutAdoptionService.t_statut) {

            const element: StatutAdoption = StatutAdoptionService.t_statut[n] as StatutAdoption
            if (id.padStart(2, '0') === element.id) {
                retval = element
            }

        }
        return retval;
    }

    public Creer(type: StatutAdoption): StatutAdoption | string {
        const newtps: StatutAdoption | undefined = StatutAdoption.Create(type.libele, type.details);

        if (newtps !== undefined) {
            StatutAdoptionService.t_statut.push(newtps)
            console.log(StatutAdoptionService.t_statut);

        }

        return newtps ? newtps : 'no statut made';
    }

    public Modifier(id: string, type: StatutAdoption): StatutAdoption {
        const idx: number = StatutAdoptionService.t_statut.findIndex((tps) => tps.id === id.padStart(2, '0'));
        StatutAdoptionService.t_statut[idx].Modifier(type.libele, type.details);
        return StatutAdoptionService.t_statut[idx];
    }

    public Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = StatutAdoptionService.t_statut.findIndex((type) => type.id === id.padStart(2, '0'));
        if (StatutAdoptionService.t_statut[idx]) {
            StatutAdoptionService.t_statut.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}
