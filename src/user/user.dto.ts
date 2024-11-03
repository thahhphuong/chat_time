import { IsNumber, IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNumber()
    age: number;
    @IsNotEmpty()
    userName: string;
    @IsNotEmpty()
    address: number;
    @IsNotEmpty()
    gender: number;
    @IsNotEmpty()
    password: string;
}