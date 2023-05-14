import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from '@app/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@app/common/config/config.module';

@Module({
  imports: [UsersModule, LoggerModule, JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: `${configService.get('JWT_EXPIRATION')}s`
      }
    })
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
