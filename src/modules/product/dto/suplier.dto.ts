import { IsNotEmpty, Length } from "class-validator";

export class suplierDto {
  @IsNotEmpty({message: 'name is required'})
  @Length(3, 20, {message: 'name must be between 3 and 20 characters'})
  name: string;
  @IsNotEmpty({message: 'name is required'})
  @Length(3, 20, {message: 'name must be between 3 and 20 characters'})
  country: string;
}
