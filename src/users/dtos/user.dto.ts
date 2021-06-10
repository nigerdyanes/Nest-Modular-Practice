import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName:string;
  @IsNotEmpty()
  @IsString()
  readonly lastName:string;
  @IsNotEmpty()
  @IsNumber()
  readonly dni:number;
  @IsNotEmpty()
  @IsNumber()
  readonly age:number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
