import { Module } from '@nestjs/common';
import { BankTransitionService } from './bank-transition.service';
import { BankTransitionController } from './bank-transition.controller';

@Module({
  controllers: [BankTransitionController],
  providers: [BankTransitionService]
})
export class BankTransitionModule {}
