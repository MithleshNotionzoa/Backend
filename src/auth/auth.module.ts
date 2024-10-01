import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [UserModule, TypeOrmModule.forFeature([User])]
})
export class AuthModule { }
