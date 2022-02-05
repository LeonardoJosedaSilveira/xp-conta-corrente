import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BankTransitionService } from './bank-transition.service';

@Controller('bank-transition')
export class BankTransitionController {
  constructor(private readonly bankTransitionService: BankTransitionService) {}

  @Post('credit/:id')
  async credit(
    @Body() createBankTransitionDto: CreateBankTransitionDto,
    @Param('id') id: string,
    ) {
    return await this.bankTransitionService.credit(createBankTransitionDto, +id);
  }

  @Post('debit/:id')
  async debit(
    @Body() createBankTransitionDto: CreateBankTransitionDto,
    @Param('id') id: string,
    ) {
    return await this.bankTransitionService.debit(createBankTransitionDto, +id);
  }

  @Get('extract/:id')
  async extract(@Param('id') id: string) {
    return await this.bankTransitionService.extract(+id);
  }

  @Get('balance/:id')
  async balance(@Param('id') id: string) {
    return await this.bankTransitionService.balance(+id);
  }
}
