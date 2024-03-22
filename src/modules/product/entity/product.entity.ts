import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Manufacturer } from "./manufacturer.entity";

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

  @OneToOne(()=> Manufacturer)
  @JoinColumn()
  manufacturer:Manufacturer;
}
