import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProfileModule], // 👈 Include entitites
  controllers: [UsersController],
  providers: [
    UserService,
    {
      provide: 'API_KEY',
      useValue: '123456789',
    },
  ],
})
export class UsersModule {}
