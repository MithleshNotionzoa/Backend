import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateAuthInput {

  @Field()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  password: string
}
