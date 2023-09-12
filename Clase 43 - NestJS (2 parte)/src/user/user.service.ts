import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[];
  nextId: number;

  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.nextId,
      ...createUserDto,
    };

    this.users.push(user);
    this.nextId++;

    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = {
      ...user,
      ...updateUserDto,
    };

    return this.users[index];
  }

  remove(id: number): User {
    const user = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}
