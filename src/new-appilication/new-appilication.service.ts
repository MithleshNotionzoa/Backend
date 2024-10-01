import { Injectable } from '@nestjs/common';
import { CreateNewAppilicationInput } from './dto/create-new-appilication.input';
import { UpdateNewAppilicationInput } from './dto/update-new-appilication.input';
import { InjectRepository } from '@nestjs/typeorm';
import { NewAppilication } from './entities/new-appilication.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class NewAppilicationService {
  constructor(@InjectRepository(NewAppilication) private newApplication: Repository<NewAppilication>, private NewApplication: NewAppilication) { }
  create(createNewAppilicationInput: CreateNewAppilicationInput) {
    // let { token } = this.NewApplication
    // let { endpoint } = this.NewApplication
    // this.NewApplication.endpoint = "/added"
    // const {id,token,endpoint}=NewewApplication
    // console.log("newApplication", newApplication)
    let token = uuidv4(), endpoint = "/notionzoa"
    const newApplication = this.newApplication.create({ ...createNewAppilicationInput, token, endpoint })
    return this.newApplication.save(newApplication)
  }

  findAll() {
    return `This action returns all newAppilication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newAppilication`;
  }

  update(id: number, updateNewAppilicationInput: UpdateNewAppilicationInput) {
    return `This action updates a #${id} newAppilication`;
  }

  remove(id: number) {
    return `This action removes a #${id} newAppilication`;
  }
}
