import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IsBoolean, isBoolean, isEmpty, IsEmpty, isNotEmpty } from "class-validator";
import { UserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async singUp(body: UserDto): Promise<any> {
        const user = await this.userService.getInfoByUserName(body.userName)

        if (user) {
            throw new HttpException(
                "user invalid", HttpStatus.BAD_REQUEST
            )
        }
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_OR_ROUNDS));
        const hashPassword = bcrypt.hashSync(body.password, salt);

        body.password = hashPassword

        const createUser = await this.userService.create(body)
        return createUser
    }

    async singIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.getInfoByUserName(username)
        if (!user) {
            throw new HttpException(
                "user invalid", HttpStatus.BAD_REQUEST
            )
        }
        const checkPass = bcrypt.compareSync(pass, user.password)
        if (!checkPass) {
            throw new HttpException(
                "password invalid", HttpStatus.BAD_REQUEST
            )
        }
        const { password, ...lest } = user

        const payload = { user: lest };

        const access_token = await this.jwtService.signAsync(payload, {
            expiresIn: "1h",

        },)
        const refresh_token = await this.jwtService.signAsync(payload, {
            expiresIn: "5h",
        })
        // this.jwtService.verify(access_token,);
        return { access_token, refresh_token, user }
    }
    async refreshToken(token: string): Promise<string | any> {
        try {
            const verifyToken = this.jwtService.verify(token)
            const { user } = verifyToken
            return {
                access_token: await this.jwtService.signAsync(user, {
                    expiresIn: "1h",

                },),
                refresh_token: await this.jwtService.signAsync(user, {
                    expiresIn: "5h",
                })
            }

            return verifyToken
        } catch (error) {
            throw new HttpException(
                error.message, HttpStatus.BAD_REQUEST
            )
        }
    }
}
