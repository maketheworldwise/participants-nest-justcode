import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, PUT, DELETE',
    optionsSuccessStatus: 200,
  });

  /**
   * Global Pipe (애플리케이션 전체 적용)
   *
   * - whitelist: DTO에 정의되지 않은 속성 무시
   * - forbidNonWhitelisted: 전달하는 요청값 중 정의되지 않은 값이 있을 경우 Error 발생
   * - transform: 네트워크를 통해 전달되는 데이터를 Javascript 객체로 변환
   * - disableErrorMessages: Error가 발생했을 때 Error 메시지 표시
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
