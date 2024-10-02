import { Post } from "src/post/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

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

    @OneToMany(()=>Post,(post)=>post.author)
    posts:Post[]
}