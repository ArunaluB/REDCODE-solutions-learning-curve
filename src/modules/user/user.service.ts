/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {




  async doUserRegister(
    userRegister : UserRegisterRequestDto ,
    ): Promise<User> {
    // // password aka hash kirima
    // const salth =await bcrypt.genSalt();
    // const password = await bcrypt.hash(userRegister.password,salth);
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return  await user.save();
  }


}
