import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity {

  // auto increment for primary key
  @PrimaryGeneratedColumn({
    comment: 'The product id unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar', // Assuming name is a string
    length: 255, // Adjust the length as needed
    comment: 'The name of the product',
  })
  name: string;

  @Column({
    type: 'decimal', // Assuming price is a decimal number
    precision: 10, // Adjust precision and scale as needed
    scale: 2,
    comment: 'The price of the product',
  })
  price: number;

}
