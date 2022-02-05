import { Test, TestingModule } from '@nestjs/testing';
import { BankTransitionService } from '../../src/bank-transition/bank-transition.service';

describe('BankTransitionService', () => {
  let service: BankTransitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankTransitionService],
    }).compile();

    service = module.get<BankTransitionService>(BankTransitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
