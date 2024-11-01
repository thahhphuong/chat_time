import { Injectable } from '@nestjs/common'
import { User } from "src/schemas/user.schema";
import { Model } from "mongoose";
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
} 