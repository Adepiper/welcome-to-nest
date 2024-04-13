import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import keys from './config/keys';

async function bootstrap() {
  console.log(keys.databaseUrl);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
