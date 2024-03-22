import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_manufacturer')
export class Manufacturer {

  @PrimaryGeneratedColumn()
  id:number;

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



}
