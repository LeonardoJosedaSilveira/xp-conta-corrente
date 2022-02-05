import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
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

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
