import { BadRequestException } from '@nestjs/common';

function valueCheck(value) {
  if(value < 0) throw new BadRequestException("Invalid value");
}

function exist(accountSelect) {
  if(!accountSelect) throw new BadRequestException("Account not exist");
}

function noFunds(value, accountSelect) {
  if(accountSelect.balance < value) throw new BadRequestException("insufficient funds");
}

function debit(value, accountSelect) {
  valueCheck(value);
  exist(accountSelect);
  noFunds(value, accountSelect);
}

function credit(value, accountSelect){
  valueCheck(value);
  exist(accountSelect);
}

export default {
  debit,
  credit,
  exist,

};
