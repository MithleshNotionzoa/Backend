import { Module } from '@nestjs/common';
import { NewAppilicationService } from './new-appilication.service';
import { NewAppilicationResolver } from './new-appilication.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewAppilication } from './entities/new-appilication.entity';

@Module({
  providers: [NewAppilicationResolver, NewAppilicationService, NewAppilication],
  imports: [TypeOrmModule.forFeature([NewAppilication])],
  exports: [NewAppilicationResolver, NewAppilicationService]
})
export class NewAppilicationModule { }
