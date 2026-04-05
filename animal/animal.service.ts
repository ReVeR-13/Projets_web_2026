import { Injectable } from '@nestjs/common';
import { Animal } from './Animal';
import { Vaccin } from 'api/vaccin';
import { Compatibilite } from 'index';

@Injectable()
export class AnimalService {

    private static t_animal: Animal[] = [];

    public FindAll(): Animal[] {
        return AnimalService.t_animal;
    }
    public FindUn(id: string): Animal | string {
        let retval: Animal | string = `Cet animal [${id.toUpperCase().trim()}] n'existe pas`;
        for (const n in AnimalService.t_animal) {

            const element: Animal = AnimalService.t_animal[n] as Animal
            if (id.toUpperCase().trim() === element.id.toUpperCase()) {
                retval = element
            }

        }
        return retval;
    }
    public Creer(animal: Animal): Animal | string {
        const newanimal: Animal | undefined = Animal.Creer(animal);

        if (newanimal !== undefined) {
            AnimalService.t_animal.push(newanimal);
        }

        return newanimal ? newanimal : 'no animal made';
    }
    public Modifier(id: string, animal: Animal): Animal {
        const idx: number = AnimalService.t_animal.findIndex((a) => a.id === id);
        AnimalService.t_animal[idx].Modifier(animal);
        return AnimalService.t_animal[idx];
    }
    public Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = AnimalService.t_animal.findIndex((a) => a.id === id.toUpperCase().trim());
        if (AnimalService.t_animal[idx]) {
            AnimalService.t_animal.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }


    public AllVaccin(animal: Animal): Vaccin[] {
        return animal.Vaccins();
    }
    public FindUnVaccin(id: string, vaccin: Vaccin): Vaccin | string {
        const animal: Animal = this.FindUn(id) as Animal;
        let retval: Vaccin | string = ''
        if (animal) {
            retval = animal.FindVaccin(vaccin);
        }
        return retval;
    }
    public AddVaccin(vaccin: Vaccin, id: string): string {
        const animal: Animal = this.FindUn(id) as Animal;
        if (animal) {
            animal.AddVaccin(vaccin)
        }

        return 'no animal made';
    }
    public SupprimerVaccin(id: string, vaccin: Vaccin): string {
        let retval = 'Suppression annulée';
        const animal: Animal = this.FindUn(id) as Animal;
        if (animal) {
            animal.RemoveVaccin(vaccin);
            retval = `Suppression effectué`;
        }
        return retval;
    }

    public AllCompatibilite(animal: Animal): Compatibilite[] {
        return animal.Compatibilites();
    }
    public FindUnCompatibilite(id: string, comp: Compatibilite): Compatibilite | string {
        const animal: Animal = this.FindUn(id) as Animal;
        let retval: Compatibilite | string = ''
        if (animal) {
            retval = animal.FindCompatibilite(comp);
        }
        return retval;
    }
    public AddCompatibilite(comp: Compatibilite, id: string): string {
        const animal: Animal = this.FindUn(id) as Animal;
        if (animal) {
            animal.AddCompatibilite(comp);
        }

        return 'no animal made';
    }
    public SupprimerCompatibilite(id: string, comp: Compatibilite): string {
        let retval = 'Suppression annulée';
        const animal: Animal = this.FindUn(id) as Animal;
        if (animal) {
            animal.RemoveVaccin(comp);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}
