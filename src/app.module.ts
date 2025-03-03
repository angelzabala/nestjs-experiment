import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { UsersModule } from './components/users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { z, ZodSchema } from 'zod';

export class CustomZodValidationPipe extends ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {
    super();
  }

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return this.schema.parse(value);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          message: 'Validation failed',
          errors: error.errors,
        }, HttpStatus.UNPROCESSABLE_ENTITY); // 422
      }
      throw new HttpException('Validation failed', HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: CustomZodValidationPipe,
    },
  ],
})
export class AppModule {}
