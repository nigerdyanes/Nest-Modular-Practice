import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileController } from './controller/profile.controller';
import { ProfileService } from './services/profile.service';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
