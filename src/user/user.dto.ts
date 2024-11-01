import { IsNumber, IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNumber()
    age: number;
    @IsNotEmpty()
    userName: number;
    @IsNotEmpty()
    address: number;
    @IsNotEmpty()
    gender: number;
}