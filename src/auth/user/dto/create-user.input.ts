import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string

  @Field()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Field()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone_number: string

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  password: string
}
