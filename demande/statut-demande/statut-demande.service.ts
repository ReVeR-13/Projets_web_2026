import { Injectable } from '@nestjs/common';
import { StatutDemande } from './StatutDemande';

@Injectable()
export class StatutDemandeService {

    private static t_Statut: StatutDemande[] = [];

    public FindAll(): StatutDemande[] {
        return StatutDemandeService.t_Statut;
    }

    public FindUn(id: string): StatutDemande | string {
        let retval: StatutDemande | string = `Cet Statut [${id.padStart(2, '0')}] n'existe pas`;
        for (const n in StatutDemandeService.t_Statut) {

            const element: StatutDemande = StatutDemandeService.t_Statut[n] as StatutDemande
            if (id.padStart(2, '0') === element.id) {
                retval = element
            }

        }
        return retval;
    }

    public Creer(statut: StatutDemande): StatutDemande | string {
        const newstatut: StatutDemande | undefined = StatutDemande.Create(statut.libele, statut.details);

        if (newstatut !== undefined) {
            StatutDemandeService.t_Statut.push(newstatut)
        }

        return newstatut ? newstatut : 'no statut made';
    }

    public Modifier(id: string, statut: StatutDemande): StatutDemande {
        const idx: number = StatutDemandeService.t_Statut.findIndex((tps) => tps.id === id.padStart(2, '0'));
        StatutDemandeService.t_Statut[idx].Modifier(statut.libele, statut.details);
        return StatutDemandeService.t_Statut[idx];
    }

    public Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = StatutDemandeService.t_Statut.findIndex((statut) => statut.id === id.padStart(2, '0'));
        if (StatutDemandeService.t_Statut[idx]) {
            StatutDemandeService.t_Statut.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}

