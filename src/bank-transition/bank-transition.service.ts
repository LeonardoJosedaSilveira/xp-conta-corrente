import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import validateTransitons from '../shared/utils/validateTransitions';
import { PrismaService } from '../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankTransitionService {
  constructor(private readonly prisma: PrismaService) {}
  
  async credit(createBankTransitionDto: CreateBankTransitionDto, id) {
    const { origin, value } = createBankTransitionDto;

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })

    validateTransitons.credit(value, accountSelect);

    const result = await this.prisma.bankTransition.create({
      data: { type: 'CREDIT', origin, value, accountId: id, }
    })

    await this.prisma.account.update({
      where: { id },
      data: { balance: { increment: value } },
    })

    return { message: `The amount of ${value} has been added to account ${id}`};
  }

  async debit(createBankTransitionDto: CreateBankTransitionDto, id) {
    const { origin, value } = createBankTransitionDto;

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
 
    validateTransitons.debit(value, accountSelect);

    await this.prisma.bankTransition.create({
      data: { type: 'DEBIT', origin, value, accountId: id, }
    })

    await this.prisma.account.update({
      where: { id },
      data: { balance: { decrement: value } },
    })

    return { message: `The amount of ${value} was debited from account ${id}`};
  }

  async extract(id) {

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
    
    validateTransitons.exist(accountSelect);
    
    const result = await this.prisma.account.findUnique({
      where: { id },
      select: {
        bankTransition:{
          select: {
            origin: true,
            type: true,
            value: true,
            date: true,
          },
          orderBy: { date: 'desc' },
        },
      },
    })
    return result;
  }

  async balance(id) {

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
    
    validateTransitons.exist(accountSelect);
 
    const result = await this.prisma.account.findUnique({
      where: { id },
      select: { balance: true },
    })
    return result;
  }
}
