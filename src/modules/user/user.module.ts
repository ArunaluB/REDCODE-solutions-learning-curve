import { UserController } from './controller/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';

@Module({
  providers: [UserService],
  controllers: [
    UserController, UserController],
  exports: [UserService],
})
export class UserModule { }
