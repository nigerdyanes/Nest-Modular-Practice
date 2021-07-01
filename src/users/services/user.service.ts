import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 import
import { Repository } from 'typeorm'; // 👈 import
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProfileService } from '../../profile/services/profile.service';

@Injectable()
export class UserService {
  constructor(
    private profileService: ProfileService,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async findAll() {
    const usersDb = await this.userRepo.find({
      relations: ['profile'],
    });

    return usersDb;
  }

  // findOne(idUser: number): User {
  //   const userFound = this.users.find((user) => user.id === idUser);
  //   const user: User = {
  //     ...userFound,
  //     profile: this.profileService.findOne(1),
  //   };
  //   return user;
  // }

  // create(user: CreateUserDto): User {
  //   const id = this.counterId++;
  //   const newUser = {
  //     id,
  //     ...user,
  //     updateAt: new Date(),
  //     createAt: new Date(),
  //   };
  //   this.users.push(newUser);
  //   return newUser;
  // }

  // update(id: number, changes: UpdateUserDto) {
  //   const user = this.findOne(id);
  //   const index = this.users.findIndex((item) => item.id === id);
  //   this.users[index] = {
  //     ...user,
  //     ...changes,
  //   };
  //   return this.users[index];
  // }

  // delete(idUser: number): boolean {
  //   const index = this.users.findIndex((item) => item.id === idUser);
  //   this.users.splice(index, 1);
  //   return true;
  // }
}
