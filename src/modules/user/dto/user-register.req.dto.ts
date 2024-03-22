import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export  class UserRegisterRequestDto {

  @IsNotEmpty()
  name: string;


  @IsNotEmpty()
  @IsEmail()
  email: string;


  @IsNotEmpty()
  @Length(8,24)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  password: string;


  @IsNotEmpty()
  @Length(8,24)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  confirm: string;
}