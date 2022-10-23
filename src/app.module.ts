import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { LogMiddleWare } from './middleware/log.middleware';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, ParticipantsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleWare)
      // 미들웨어 적용을 제외할 API
      .exclude({ path: '/user/req/:id', method: RequestMethod.POST })
      .forRoutes(UserController);
  }
}
