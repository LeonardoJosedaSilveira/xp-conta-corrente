import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankTransitionService } from './bank-transition.service';
import { CreateBankTransitionDto } from './dto/create-bank-transition.dto';
import { UpdateBankTransitionDto } from './dto/update-bank-transition.dto';

@Controller('bank-transition')
export class BankTransitionController {
  constructor(private readonly bankTransitionService: BankTransitionService) {}

  @Post()
  create(@Body() createBankTransitionDto: CreateBankTransitionDto) {
    return this.bankTransitionService.create(createBankTransitionDto);
  }

  @Get()
  findAll() {
    return this.bankTransitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankTransitionService.findOne(+id);
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
