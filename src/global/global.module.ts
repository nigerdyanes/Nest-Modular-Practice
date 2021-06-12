import { Module, Global } from '@nestjs/common';

const GLOBAL_KEY = '987654321';
@Global()
@Module({
  providers: [
    {
      provide: 'GLOBAL_KEY',
      useValue: GLOBAL_KEY,
    },
  ],
  exports: ['GLOBAL_KEY'],
})
export class GlobalModule {}
