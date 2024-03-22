/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from './user.entity';

@Controller('user')
export class UserController { 

  constructor(private readonly userService: UserService) {}


  @Post('/register')
  async doUserRegister(
    @Body(SETTINGS.VALIDATION_PIPE) userRegister : UserRegisterRequestDto,
  ):Promise<User> {
    return await  this.userService.doUserRegister(userRegister);
  }
}
