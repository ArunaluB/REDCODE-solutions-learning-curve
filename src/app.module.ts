import { ProductServiseService } from './modules/product/productservise.service';
import { ProductcontrollerController } from './modules/product/productcontroller.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
// import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';

// npm install @nestjs/typeorm typeorm mysql2 command aka

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(TypeOrmConfig) ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
