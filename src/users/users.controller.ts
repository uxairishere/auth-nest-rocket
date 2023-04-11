import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { UsersDto } from './users.dto';

@Controller('auth')
export class UsersController {
    constructor(private readonly userSerive: UsersService){}

    @Post('/signup')
    async createUser(@Body() body: UsersDto): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(body.password, saltOrRounds);
        const result = await this.userSerive.createUser(
            body.username,
            hashedPassword
        );
        return result;

    }
}
