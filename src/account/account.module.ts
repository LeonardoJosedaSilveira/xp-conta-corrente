import { PrismaService } from '../database/prisma.service';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Module } from '@nestjs/common';


@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService]
})
export class AccountModule {}
