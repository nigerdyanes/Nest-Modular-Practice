import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'FistUser',
      lastName: 'lastNameUser',
      dni: 1070809457,
      age: 24,
    },
  ];
  private counterId = 1;
  findAll(): User[] {
    return this.users;
  }

  findOne(idUser: number): User {
    const userFound = this.users.find((user) => user.id === idUser);
    return userFound;
  }

  create(user: CreateUserDto): User {
    const id = this.counterId++;
    const newUser = {
      id,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  delete(idUser: number): boolean {
    const index = this.users.findIndex((item) => item.id === idUser);
    this.users.splice(index, 1);
    return true;
  }
}
