import { ProductcontrollerController } from './modules/product/productcontroller.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [ProductModule, UserModule],
  controllers: [
    ProductcontrollerController, AppController],
  providers: [AppService],
})
export class AppModule { }
