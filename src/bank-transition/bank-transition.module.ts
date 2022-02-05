import { BankTransitionController } from './bank-transition.controller';
import { BankTransitionService } from './bank-transition.service';
import { PrismaService } from '../database/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BankTransitionController],
  providers: [BankTransitionService, PrismaService]
})
export class BankTransitionModule {}
