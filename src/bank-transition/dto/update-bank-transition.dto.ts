import { PartialType } from '@nestjs/mapped-types';
import { CreateBankTransitionDto } from './create-bank-transition.dto';

export class UpdateBankTransitionDto extends PartialType(CreateBankTransitionDto) {}
