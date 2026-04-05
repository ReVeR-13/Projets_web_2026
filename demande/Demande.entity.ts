
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class eDemande {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('date',{nullable:true})
    dateOuverture: Date;

    @Column('date',{nullable:false})
    dateFermerture?: Date;

    @Column('varchar',{nullable:true})
    id_animal: string;

    @Column('varchar',{nullable:false})
    id_contact: string;

    @Column('varchar',{nullable:false})
    id_type: string;

    @Column('varchar',{nullable:false})
    id_statut: string;

    @Column('varchar',{nullable:true})
    details: string;

}