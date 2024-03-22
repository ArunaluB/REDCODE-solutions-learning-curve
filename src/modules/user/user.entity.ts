import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string
    @Column()
    email : string
    @Column()
    password : string
    @CreateDateColumn()
    created_at : Date
    @UpdateDateColumn()
    updated_at : Date
}


