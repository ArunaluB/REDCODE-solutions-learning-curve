import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
@Entity('suplier')
export  class suplier extends BaseEntity {

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
    type: 'varchar',
    length: 255,
    comment: 'The name of the country of the manufacturer',

  })
  country: string;

  @ManyToOne(()=> Product,(product)=>product.supliers)
  product:Product

}
