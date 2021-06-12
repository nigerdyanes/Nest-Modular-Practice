import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UserService } from './services/user.service';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [ProfileModule],
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
