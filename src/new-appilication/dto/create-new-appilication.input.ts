import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateNewAppilicationInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string

  @Field()
  @IsString()
  url?: string

  @Field()
  @IsNotEmpty()
  type: "client" | "server"

  @Field()
  @IsNotEmpty()
  label: "error" | "info" | "warning"
}
