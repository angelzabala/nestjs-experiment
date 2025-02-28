import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

// Repositories
import { UserMongoRepository } from './repositories/user-repository.mongodb';
import { USER_REPOSITORY } from './repositories/user-repository.interface';

// Import all controllers, services, and use cases from the index
import {
  // Controllers
  CreateUserController,
  FindAllUsersController,
  FindOneUserController,
  UpdateUserController,
  RemoveUserController,
  
  // Services
  CreateUserService,
  FindAllUsersService,
  FindOneUserService,
  UpdateUserService,
  RemoveUserService,
  
  // Use Cases
  CreateUserUseCase,
  FindAllUsersUseCase,
  FindOneUserUseCase,
  UpdateUserUseCase,
  RemoveUserUseCase
} from './use-cases';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindOneUserController,
    UpdateUserController,
    RemoveUserController
  ],
  providers: [
    // Repository
    {
      provide: USER_REPOSITORY,
      useClass: UserMongoRepository,
    },
    // Services
    CreateUserService,
    FindAllUsersService,
    FindOneUserService,
    UpdateUserService,
    RemoveUserService,
    // Use Cases
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindOneUserUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase,
  ],
  exports: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindOneUserUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase
  ],
})
export class UsersModule {} 