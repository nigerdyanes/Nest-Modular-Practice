import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { CreateProfileDto, UpdateProfileDto } from '../dtos/profile.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
  constructor(
    private profileService: ProfileService,
    @Inject('getApiUsers') private getApiUsers: any,
    @Inject('GLOBAL_KEY') private globalKey: string,
  ) {}
  @Get()
  getProfiles() {
    this.getApiUsers;
    console.log(this.globalKey);

    return this.profileService.findAll();
  }
  @Get('/:idProfile')
  getProfile(@Param('idProfile', ParseIntPipe) idProfile: number) {
    return this.profileService.findOne(idProfile);
  }
  @Post()
  createProfile(@Body() paylod: CreateProfileDto) {
    return this.profileService.create(paylod);
  }
  @Put('/:idProfile')
  updateProfile(
    @Param('idProfile', ParseIntPipe) idProfile: number,
    @Body() paylod: UpdateProfileDto,
  ) {
    return this.profileService.update(idProfile, paylod);
  }
  @Delete('/:idProfile')
  deleteProfile(@Param('idProfile', ParseIntPipe) idProfile: number) {
    return this.profileService.delete(idProfile);
  }
}
