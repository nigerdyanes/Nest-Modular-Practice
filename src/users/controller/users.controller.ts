import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    @Inject('API_KEY') private apiKey: string,
  ) {}

  @Get()
  getUsers() {
    console.log(this.apiKey);
    console.log(this.configService.get('TOKEN_TIME'));

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
    return this.userService.update(idUser, user);
  }

  @Delete('/:idUser')
  deleteUser(@Param('idUser', ParseIntPipe) idUser: number) {
    return this.userService.delete(idUser);
  }
}
