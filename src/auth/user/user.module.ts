import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserResolver, UserService],
  imports: [TypeOrmModule.forFeature([User])]

})
export class UserModule { }
