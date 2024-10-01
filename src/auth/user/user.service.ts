import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  findAll() {
    return `This action returns all user`;
  }

  findOne(email: any) {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserInput: CreateUserInput) {
    let saltRounds = 10;
    let { password } = createUserInput
    let hashedPassword: any = await bcrypt.hash(password, saltRounds);
    const user = this.userRepository.create({ ...createUserInput, password: hashedPassword })
    // console.log("user", user)
    return this.userRepository.save(user)
  }


  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
