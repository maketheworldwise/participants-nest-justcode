import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LogMiddleWare } from './middleware/log.middleware';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
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
