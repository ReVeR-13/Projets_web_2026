import { Injectable } from '@nestjs/common';
import { TypeDemande } from '../type-demande/TypeDemande';

@Injectable()
export class TypeDemandeService {
    private static t_types: TypeDemande[] = [];

    public FindAll(): TypeDemande[] {
        return TypeDemandeService.t_types;
    }

    public FindUn(id: string): TypeDemande | string {
        let retval: TypeDemande | string = `Ce type [${id.padStart(2, '0')}] n'existe pas`;
        for (const n in TypeDemandeService.t_types) {

            const element: TypeDemande = TypeDemandeService.t_types[n] as TypeDemande
            if (id.padStart(2, '0') === element.id) {
                retval = element
            }

        }
        return retval;
    }

    public Creer(type: TypeDemande): TypeDemande | string {
        const newtype: TypeDemande | undefined = TypeDemande.Create(type.libele, type.details);

        if (newtype !== undefined) {
            TypeDemandeService.t_types.push(newtype)
            console.log(TypeDemandeService.t_types);

        }

        return newtype ? newtype : 'no type made';
    }

    public Modifier(id: string, type: TypeDemande): TypeDemande {
        const idx: number = TypeDemandeService.t_types.findIndex((tps) => tps.id === id.padStart(2, '0'));
        TypeDemandeService.t_types[idx].Modifier(type.libele, type.details);
        return TypeDemandeService.t_types[idx];
    }

    public Supprimer(id: string): string {
        let retval = 'Suppression annulée';
        const idx: number = TypeDemandeService.t_types.findIndex((type) => type.id === id.padStart(2, '0'));
        if (TypeDemandeService.t_types[idx]) {
            TypeDemandeService.t_types.splice(idx, 1);
            retval = `Suppression effectué`;
        }
        return retval;
    }
}
