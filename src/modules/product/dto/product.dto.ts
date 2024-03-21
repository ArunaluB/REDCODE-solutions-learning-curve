import { IsNotEmpty, Length } from "class-validator";

export class ProductDto {
  // meken kiyanne aniwareynma me attrutue aka data anna ona ahema nathnam error akata meg kiyana tika penawa
  @IsNotEmpty({message: 'name is required'})
  @Length(3, 20, {message: 'name must be between 3 and 20 characters'})
  name: string;

  @IsNotEmpty({message: 'prise is required'})
  price: number;
}