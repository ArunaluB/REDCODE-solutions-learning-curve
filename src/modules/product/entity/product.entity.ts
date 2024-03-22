import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity {

  
  @PrimaryGeneratedColumn({
    comment: 'The product id unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'The name of the product',
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'The price of the product',
  })
  price: number;

}
