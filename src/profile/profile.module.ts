import { Module } from '@nestjs/common';
import { ProfileController } from './controller/profile.controller';
import { ProfileService } from './services/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    {
      provide: 'getApiUsers',
      useFactory: async () => {
        console.log('All users');
      },
    },
  ],
  exports: [ProfileService],
})
export class ProfileModule {}
