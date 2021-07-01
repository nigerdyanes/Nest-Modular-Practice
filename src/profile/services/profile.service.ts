import { Injectable } from '@nestjs/common';
import { Profile } from '../entities/profile.entity';
import { CreateProfileDto, UpdateProfileDto } from '../dtos/profile.dto';

@Injectable()
export class ProfileService {
  // private counterId = 1;
  // findAll(): Profile[] {
  //   return this.profiles;
  // }
  // findOne(idProfile: number): Profile {
  //   return this.profiles.find((profile) => profile.id === idProfile);
  // }
  // create(profile: CreateProfileDto): Profile {
  //   const id = this.counterId++;
  //   const newProfile: Profile = {
  //     id,
  //     ...profile,
  //   };
  //   this.profiles.push(newProfile);
  //   return newProfile;
  // }
  // update(idProfile: number, profileUpdated: UpdateProfileDto): Profile {
  //   const profile = this.findOne(idProfile);
  //   const index = this.profiles.findIndex(
  //     (profile) => profile.id === idProfile,
  //   );
  //   this.profiles[index] = {
  //     ...profile,
  //     ...profileUpdated,
  //   };
  //   return this.profiles[index];
  // }
  // delete(idProfile: number): boolean {
  //   const index = this.profiles.findIndex(
  //     (profile) => profile.id === idProfile,
  //   );
  //   this.profiles.splice(index, 1);
  //   return true;
  // }
}
