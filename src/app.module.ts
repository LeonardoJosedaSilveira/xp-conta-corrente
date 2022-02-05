import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankTransitionModule } from './bank-transition/bank-transition.module';

@Module({
  imports: [BankTransitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
