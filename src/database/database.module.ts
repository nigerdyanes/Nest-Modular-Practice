import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService) => {
        return {
          type: 'postgres',
          host: configService.get('HOST_DATABASE'),
          username: configService.get('USER_DATABASE'),
          password: configService.get('PASSWORD_DATABASE'),
          database: configService.get('DATABASE_NAME'),
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
