import { CreateBankTransitionDto } from './create-bank-transition.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBankTransitionDto extends PartialType(CreateBankTransitionDto) {}
