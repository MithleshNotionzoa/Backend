import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NewAppilicationService } from './new-appilication.service';
import { NewAppilication } from './entities/new-appilication.entity';
import { CreateNewAppilicationInput } from './dto/create-new-appilication.input';
import { UpdateNewAppilicationInput } from './dto/update-new-appilication.input';

@Resolver(() => NewAppilication)
export class NewAppilicationResolver {
  constructor(private readonly newAppilicationService: NewAppilicationService) { }

  @Mutation(() => NewAppilication)
  createNewAppilication(@Args('createNewAppilicationInput') createNewAppilicationInput: CreateNewAppilicationInput) {
    return this.newAppilicationService.create(createNewAppilicationInput);
  }

  @Query(() => [NewAppilication], { name: 'newAppilication' })
  findAll() {
    return this.newAppilicationService.findAll();
  }

  @Query(() => NewAppilication, { name: 'newAppilication' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.newAppilicationService.findOne(id);
  }

  @Mutation(() => NewAppilication)
  updateNewAppilication(@Args('updateNewAppilicationInput') updateNewAppilicationInput: UpdateNewAppilicationInput) {
    return this.newAppilicationService.update(updateNewAppilicationInput.id, updateNewAppilicationInput);
  }

  @Mutation(() => NewAppilication)
  removeNewAppilication(@Args('id', { type: () => Int }) id: number) {
    return this.newAppilicationService.remove(id);
  }
}
