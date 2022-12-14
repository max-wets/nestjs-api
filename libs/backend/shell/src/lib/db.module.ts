import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  PostEntity,
  UserEntity,
  AddressEntity,
  CategoryEntity,
} from '@nestjs-api/backend/infrastructure';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [PostEntity, UserEntity, AddressEntity, CategoryEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([
      PostEntity,
      UserEntity,
      AddressEntity,
      CategoryEntity,
    ]),
  ],
  exports: [
    TypeOrmModule.forFeature([
      PostEntity,
      UserEntity,
      AddressEntity,
      CategoryEntity,
    ]),
  ],
})
export class DbModule {}
