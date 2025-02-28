import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserModel } from '../schemas/user.schema';
import { CreateUserDto } from '../use-cases/create_user_use_case/dto/create_user.dto';
import { GetUserDto } from '../use-cases/create_and_get_user_use_case/dto/create_and_get.dto';
import { IUserRepository } from './user_repository.interface';

@Injectable()
export class UserMongoRepository implements IUserRepository {
  //TODO: CHECK WHY THE MODEL NEEDS TO BE WRITTEN as a 'User' it should be accesible from the schema
  constructor(@InjectModel(UserModel.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async get(createUserDto: GetUserDto): Promise<User> {
    const foundUser = await this.userModel.findById(createUserDto.email).exec();
    if (!foundUser) {
      throw new Error('User not found');
    }
    return foundUser;
  }

  // async findAll(): Promise<User[]> {
  //   return this.userModel.find().exec();
  // }

  // async findOne(id: string): Promise<User | null> {
  //   return this.userModel.findById(id).exec();
  // }

  // async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
  //   return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  // }

  // async remove(id: string): Promise<User | null> {
  //   return this.userModel.findByIdAndDelete(id).exec();
  // }
} 