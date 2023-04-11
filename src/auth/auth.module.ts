import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './local.auth';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: 'secretKey',
        signOptions: {expiresIn: '60s'},
    }), MongooseModule.forFeature([{name: "user", schema: UserSchema}])],
    providers: [AuthService, UsersService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
