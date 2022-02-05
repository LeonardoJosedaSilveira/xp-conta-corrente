import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import { UpdateBankTransitionDto } from './dto/update-bank-transition.dto';
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

  @Get()
  findAll() {
    return this.bankTransitionService.findAll();
  }

  @Get('extract/:id')
  async extract(@Param('id') id: string) {
    return await this.bankTransitionService.extract(+id);
  }

  @Get('balance/:id')
  async balance(@Param('id') id: string) {
    return await this.bankTransitionService.balance(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankTransitionDto: UpdateBankTransitionDto) {
    return this.bankTransitionService.update(+id, updateBankTransitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankTransitionService.remove(+id);
  }
}
