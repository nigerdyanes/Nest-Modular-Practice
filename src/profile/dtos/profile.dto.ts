/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
