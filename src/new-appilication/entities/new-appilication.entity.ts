import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class NewAppilication {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  url: string

  @Field()
  @Column()
  type: string

  @Field()
  @Column()
  label: string

  @Field()
  @Column()
  token: string

  @Field()
  @Column()
  endpoint: string
}
