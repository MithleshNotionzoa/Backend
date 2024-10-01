import { Test, TestingModule } from '@nestjs/testing';
import { NewAppilicationResolver } from './new-appilication.resolver';
import { NewAppilicationService } from './new-appilication.service';

describe('NewAppilicationResolver', () => {
  let resolver: NewAppilicationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewAppilicationResolver, NewAppilicationService],
    }).compile();

    resolver = module.get<NewAppilicationResolver>(NewAppilicationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
