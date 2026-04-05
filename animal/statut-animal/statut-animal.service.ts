import { Injectable } from '@nestjs/common';
import { StatutAnimal } from './StatutAnimal';

@Injectable()
export class StatutAnimalService {

    private static t_statut: StatutAnimal[] = [];

    public FindAll(): StatutAnimal[] {
        return StatutAnimalService.t_statut;
    }

    public FindUn(id: string): StatutAnimal | string {
        let retval: StatutAnimal | string = `Cet statut [${id.padStart(2, '0')}] n'existe pas`;
        for (const n in StatutAnimalService.t_statut) {

            const element: StatutAnimal = StatutAnimalService.t_statut[n] as StatutAnimal
            if (id.padStart(2, '0') === element.id) {
                retval = element
            }

        }
        return retval;
    }

    public Creer(type: StatutAnimal): StatutAnimal | string {
        const newtps: StatutAnimal | undefined = StatutAnimal.Create(type.libele, type.details);

        if (newtps !== undefined) {
            StatutAnimalService.t_statut.push(newtps)
            console.log(StatutAnimalService.t_statut);

        }

        return newtps ? newtps : 'no statut made';
    }

    public Modifier(id: string, type: StatutAnimal): StatutAnimal {
        const idx: number = StatutAnimalService.t_statut.findIndex((tps) => tps.id === id.padStart(2, '0'));
        StatutAnimalService.t_statut[idx].Modifier(type.libele, type.details);
        return StatutAnimalService.t_statut[idx];
    }

    public Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = StatutAnimalService.t_statut.findIndex((type) => type.id === id.padStart(2, '0'));
        if (StatutAnimalService.t_statut[idx]) {
            StatutAnimalService.t_statut.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}
