import { BankTransitionModule } from './bank-transition/bank-transition.module';
import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';

@Module({
  imports: [BankTransitionModule, AccountModule, ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
