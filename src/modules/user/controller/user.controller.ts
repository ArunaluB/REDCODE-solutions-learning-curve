/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {

  constructor(private userService: UserService) {}

  @Post('/register')
  register() {

  }
}
