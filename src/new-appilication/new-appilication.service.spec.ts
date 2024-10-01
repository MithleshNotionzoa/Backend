import { Test, TestingModule } from '@nestjs/testing';
import { NewAppilicationService } from './new-appilication.service';

describe('NewAppilicationService', () => {
  let service: NewAppilicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewAppilicationService],
    }).compile();

    service = module.get<NewAppilicationService>(NewAppilicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
