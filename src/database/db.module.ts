import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI') ?? 'mongodb://127.0.0.1:27017/app',
        dbName: config.get<string>('MONGO_DB') ?? undefined,
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class DbModule {}

