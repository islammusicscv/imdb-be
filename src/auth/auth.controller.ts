import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './user-register.dto';
import { UserLoginDto } from './user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userRegisterDto: UserRegisterDto) {
    return await this.authService.register(userRegisterDto);
  }

  @Post('login')
  async login(@Body() userLoginDto: UserLoginDto) {
    return await this.authService.login(userLoginDto);
  }
}
