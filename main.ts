import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter, Infos, SwaggerConfiguration } from './index';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  SwaggerConfiguration.setup(app);

  await app.listen(process.env.APP_PORT ?? 3200);

  Infos.General();
}
bootstrap();
