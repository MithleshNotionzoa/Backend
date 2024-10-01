import { CreateNewAppilicationInput } from './create-new-appilication.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNewAppilicationInput extends PartialType(CreateNewAppilicationInput) {
  @Field(() => Int)
  id: number;
}
