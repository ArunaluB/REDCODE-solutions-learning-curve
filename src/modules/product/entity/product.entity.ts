import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('product')
export class Product extends BaseEntity {

  // auto inveremet wana primary key aka
  @PrimaryGeneratedColumn({
    comment: 'The product id unique identier',
  })
  name: string;
  @Column({ 
    type: 'int',
  })
  price: number;
}