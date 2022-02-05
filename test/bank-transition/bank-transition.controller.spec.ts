import { Test, TestingModule } from '@nestjs/testing';
import { BankTransitionController } from '../../src/bank-transition/bank-transition.controller';
import { BankTransitionService } from '../../src/bank-transition/bank-transition.service';

describe('BankTransitionController', () => {
  let controller: BankTransitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankTransitionController],
      providers: [BankTransitionService],
    }).compile();

    controller = module.get<BankTransitionController>(BankTransitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});