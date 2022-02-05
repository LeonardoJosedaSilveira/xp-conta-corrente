import { PrismaService } from '../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create() {
    const result = await this.prisma.account.create({
      data: { balance: 0 },
      select: { id: true }
    })
    return result;
  }
}
