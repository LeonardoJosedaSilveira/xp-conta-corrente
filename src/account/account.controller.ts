import { AccountService } from './account.service';
import { Controller, Post } from '@nestjs/common';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create() {
    return await this.accountService.create();
  }
}
