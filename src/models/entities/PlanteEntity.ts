import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : true})
    nom: string;

    @Column({nullable : true})
    soleil: string;

    @Column({nullable : true})
    arrosage: number;

    @Column({nullable : true})
    categorie: string;

    @Column({nullable : true})
    image: string; 

}