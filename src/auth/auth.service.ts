import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserRegisterDto } from './user-register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(userRegisterDto: UserRegisterDto) {
    return await this.userService.create(userRegisterDto);
  }
}
