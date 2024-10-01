import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: String

  @Field()
  @Column({ unique: true })
  email: string

  @Field()
  @Column({ unique: true })
  phone_number: string

  @Field()
  @Column()
  password: string
}
