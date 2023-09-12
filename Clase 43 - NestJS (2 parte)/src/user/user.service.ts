import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemes/user.scheme';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModule: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModule.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModule.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModule.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userModule.updateOne({ _id: id }, updateUserDto).exec();
    return await this.findOne(id);
  }

  async remove(id: number): Promise<User> {
    return await this.remove(id);
  }
}
