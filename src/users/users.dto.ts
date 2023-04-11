import { IsString, IsNotEmpty } from "class-validator";

export class UsersDto {
    @IsString()
    @IsNotEmpty()
    public username: string;

    @IsString()
    @IsNotEmpty()
    public password: string;
}