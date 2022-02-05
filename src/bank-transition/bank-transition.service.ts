import { Injectable } from '@nestjs/common';
import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import { UpdateBankTransitionDto } from './dto/update-bank-transition.dto';

@Injectable()
export class BankTransitionService {
  create(createBankTransitionDto: CreateBankTransitionDto) {
    return 'This action adds a new bankTransition';
  }

  findAll() {
    return `This action returns all bankTransition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankTransition`;
  }

  update(id: number, updateBankTransitionDto: UpdateBankTransitionDto) {
    return `This action updates a #${id} bankTransition`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankTransition`;
  }
}
