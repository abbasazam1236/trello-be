
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BoardsModule } from './boards/boards.module';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        database: ConfigService.get('DATABASE_NAME'),
        host: ConfigService.get('DATABASE_HOST'),
        port: ConfigService.get<number>('DATABASE_PORT'),
        username: ConfigService.get('DATABASE_USERNAME'),
        password: ConfigService.get('DATABASE_PASSWORD'),
        synchronize: ConfigService.get<boolean>('DATABASE_SYNC'),
        logging: ConfigService.get<boolean>('DATABASE_LOGGING'),
        autoLoadEntities: ConfigService.get<boolean>('LOAD_ENTITIES'),
        entities: [__dirname + '/boards/entities/*.entity.{ts,js}'],

      }),
    }),
    BoardsModule,
    ListModule,
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
