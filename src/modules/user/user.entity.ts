import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
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

    // subcribe use karala api insert wenna kalin hash karanna kiyanawa
    @BeforeInsert()
    async hashPassword(password : string) {
      const salth =await bcrypt.genSalt();
      this.password = await bcrypt.hash(password || this.password ,salth);
    }
}


