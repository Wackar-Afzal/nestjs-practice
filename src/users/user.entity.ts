import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:string;

    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    name:string;


    @Column({
        type:"varchar",
        length:96,
        nullable:false,
        unique:true
    })
    email:string;

    @Column({
        type:"varchar",
        length:96,
        nullable:false
    })
    password:string;


}