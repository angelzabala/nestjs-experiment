import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './schemas/user.schema';

// Repositories
import { UserMongoRepository } from './repositories/user_repository.mongodb';
import { USER_REPOSITORY } from './repositories/user_repository.interface';

// Import all controllers, services, and use cases from the index
import {
  // Controllers
  CreateUserController,
  CreateAndGetUserController,
  
  // Services
  CreateUserService,
  CreateAndGetUserService,
  
  // Use Cases
  CreateUserUseCase,
  CreateAndGetUserUseCase,
} from './use_cases';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserModel.schema }]),
  ],
  controllers: [
    CreateUserController,
    CreateAndGetUserController,
  ],
  providers: [
    // Repository
    {
      provide: USER_REPOSITORY,
      useClass: UserMongoRepository,
    },
    // Services
    CreateUserService,
    CreateAndGetUserService,
    // Use Cases
    CreateUserUseCase,
    CreateAndGetUserUseCase,
  ],
  exports: [
    CreateUserUseCase,
    CreateAndGetUserUseCase,
  ],
})
export class UsersModule {} 