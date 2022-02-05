import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import { UpdateBankTransitionDto } from './dto/update-bank-transition.dto';

@Injectable()
export class BankTransitionService {
  constructor(private readonly prisma: PrismaService) {}

  
  async credit(createBankTransitionDto: CreateBankTransitionDto, id) {
    const { origin, value } = createBankTransitionDto;

    if(value < 0) throw new BadRequestException("Invalid value");

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
    
    if(!accountSelect) throw new BadRequestException("Account not exist");
    

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

    if(value < 0) throw new BadRequestException("Invalid value");

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
    
    if(!accountSelect) throw new BadRequestException("Account not exist");

    if(accountSelect.balance < value) throw new BadRequestException("insufficient funds");
    

    const result = await this.prisma.bankTransition.create({
      data: { type: 'DEBIT', origin, value, accountId: id, }
    })

    await this.prisma.account.update({
      where: { id },
      data: { balance: { decrement: value } },
    })

    return { message: `The amount of ${value} 1234 was debited from account ${id}`};
  }

  findAll() {
    return `This action returns all bankTransition`;
  }

  async extract(id) {

    const accountSelect = await this.prisma.account.findUnique({ where: { id } })
    
    if(!accountSelect) throw new BadRequestException("Account not exist");  
    
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
    
    if(!accountSelect) throw new BadRequestException("Account not exist");  
    
    const result = await this.prisma.account.findUnique({
      where: { id },
      select: { balance: true },
    })
    return result;
  }

  update(id: number, updateBankTransitionDto: UpdateBankTransitionDto) {
    return `This action updates a #${id} bankTransition`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankTransition`;
  }
}
