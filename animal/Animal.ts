import { Vaccin } from "api/vaccin";
import { Sexe } from "../../../lesBases";
import { StatutAnimal } from "./statut-animal";
import { TypeAnimal } from "./type-animal";
import { Compatibilite } from "index";
import { Abri } from "./abri/Abri";

export class Animal {

    readonly id: string;
    readonly date: Date

    nom: string;
    date_naiss: Date;
    sexe: Sexe;
    couleur: string;
    type: TypeAnimal;
    steril: boolean;
    date_steril?: Date;
    statut: StatutAnimal;

    date_deces?: Date;
    descrip: string;
    particularite: string;

    private t_vaccin: Vaccin[];
    private t_compatible: Compatibilite[];

    abri: Abri;

    private static num: number=0;
    private constructor(nom: string, date_naiss: Date, sexe: Sexe, couleur: string, type: TypeAnimal, steril: boolean
        , statut: StatutAnimal, descrip: string, particularite: string, date_steril?: Date) {

        const dte: Date = new Date();
        Animal.num++;
        this.id = `${dte.toISOString().slice(0, 10).replace(/-/g, '')}${Animal.num.toString().padStart(5, '0')}`;
        this.date = dte;

        this.nom = nom;
        this.date_naiss = date_naiss;
        this.sexe = sexe;
        this.couleur = couleur;
        this.type = type;
        this.steril = steril;
        this.date_steril = date_steril;
        this.statut = statut;
        this.descrip = descrip;
        this.particularite = particularite;
    }

    public AddVaccin(vaccin: Vaccin) {
        this.t_vaccin.push(vaccin);
    }
    public RemoveVaccin(vaccin: Vaccin) {

        const idx: number = this.t_vaccin.findIndex((type) => type.id === vaccin.id)
        if (this.t_vaccin[idx]) {
            this.t_vaccin.splice(idx, 1);
        }

    }
    public Vaccins():Vaccin[]{
        return this.t_vaccin;
    }
    public FindVaccin(vaccin:Vaccin):Vaccin | string{
        let retval: Vaccin | string = `${this.nom} n'a pas le vaccin  [${vaccin.nom}] `;
        for (const n in this.t_vaccin) {

            const element: Vaccin = this.t_vaccin[n] as Vaccin
            if (vaccin.id === element.id) {
                retval = element
            }

        }
        return retval;
    }

    public AddCompatibilite(comp: Compatibilite) {
        this.t_compatible.push(comp);
    }
    public RemoveCompatibilite(comp: Compatibilite) {

        const idx: number = this.t_compatible.findIndex((cpm) => cpm.id === comp.id)
        if (this.t_compatible[idx]) {
            this.t_compatible.splice(idx, 1);
        }

    }
    public Compatibilites():Vaccin[]{
        return this.t_compatible;
    }
    public FindCompatibilite(cpm:Compatibilite):Compatibilite | string{
        let retval: Compatibilite | string = `${this.nom} n'a pas la compatibilité  [${cpm.nom}] `;
        for (const n in this.t_compatible) {

            const element: Compatibilite = this.t_compatible[n] as Compatibilite
            if (cpm.id === element.id) {
                retval = element
            }

        }
        return retval;
    }


    public Modifier(animal:Animal): Animal {
        this.nom = animal.nom;
        this.date_naiss = animal.date_naiss;
        this.sexe = animal.sexe;
        this.couleur = animal.couleur;
        this.type = animal.type;
        this.steril = animal.steril;
        this.date_steril = animal.date_steril;
        this.statut = animal.statut;
        this.descrip = animal.descrip;
        this.particularite = animal.particularite;
        this.date_deces = animal.date_deces;

        return this;
    }

    public static Creer(animal:Animal): Animal {

        let retval: Animal = new Animal(animal.nom, animal.date_naiss, animal.sexe, animal.couleur,
             animal.type, animal.steril, animal.statut, animal.descrip, animal.particularite, animal.date_steril);
        return retval;
    }

}