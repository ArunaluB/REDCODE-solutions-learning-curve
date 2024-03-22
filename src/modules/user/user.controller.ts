/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';

@Controller('user')
export class UserController { 

  constructor(private readonly userService: UserService) {}


  @Post('/register')
  doUserRegister(
    @Body(new ValidationPipe({ errorHttpStatusCode:HttpStatus.UNPROCESSABLE_ENTITY })) userRegister : UserRegisterRequestDto,
  ) {
    return this.userService.doUserRegister();
  }
}
