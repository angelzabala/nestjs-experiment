import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserModel } from '../schemas/user.schema';
import { CreateUserDto } from '../use-cases/create_user_use_case/dto/create-user.dto';
// import { UpdateUserDto } from '../use-cases/update_user_use_case/dto/update-user.dto';
import { IUserRepository } from './user-repository.interface';

@Injectable()
export class UserMongoRepository implements IUserRepository {
  //TODO: CHECK WHY THE MODEL NEEDS TO BE WRITTEN as a 'User' it should be accesible from the schema
  constructor(@InjectModel(UserModel.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
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