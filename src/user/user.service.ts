import { Injectable } from '@nestjs/common'
import { User } from "src/schemas/user.schema";
import { Model, ObjectId } from "mongoose";
import { UserDto } from "src/user/user.dto";
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>
    ) { }

    async create(userDto: UserDto): Promise<User> {
        const createdCat = new this.userModel(userDto);
        return createdCat.save()
    }
    async getInfo(id: ObjectId): Promise<User> {
        const user = await this.userModel.findOne({ _id: id }).lean()
        return user
    }
    async getInfoByUserName(name: string): Promise<User> {
        const user = await this.userModel.findOne({ userName: name }).lean()
        return user
    }
} 