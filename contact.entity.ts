import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Contact{
    @PrimaryColumn('varchar',{length:26,default:'()=>`${ulid()}`'})
    contact_id:string

    @Column('date',{nullable:false})
    date:Date;

    @Column('varchar',{nullable:false})
    nom:string;
}

