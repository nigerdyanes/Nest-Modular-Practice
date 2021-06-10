import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get('/:idUser')
  getUser(@Param('idUser', ParseIntPipe) idUser: number) {
    return this.userService.findOne(idUser);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Put('/:idUser')
  updateUser(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userService.update(idUser,user);
  }

  @Delete('/:idUser')
  deleteUser(@Param('idUser', ParseIntPipe) idUser: number) {
    return this.userService.delete(idUser);
  }
}
