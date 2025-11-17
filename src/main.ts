import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core.module';
import { GlobalValidationPipe } from './common/pipes/global-validation.pipe';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  app.useGlobalPipes(new GlobalValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
