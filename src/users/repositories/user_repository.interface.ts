import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../use-cases/create_user_use_case/dto/create_user.dto';
import { GetUserDto } from '../use-cases/create_and_get_user_use_case/dto/create_and_get.dto';
// import { UpdateUserDto } from '../use-cases/update_user_use_case/dto/update-user.dto';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  get(createUserDto: GetUserDto): Promise<User>;
  // findAll(): Promise<User[]>;
  // findOne(id: string): Promise<User | null>;
  // update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
  // remove(id: string): Promise<User | null>;
} 