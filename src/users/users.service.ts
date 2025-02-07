import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserRegisterDto } from '../auth/user-register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepostory: Repository<User>,
  ) {}

  async create(user: UserRegisterDto): Promise<User> {
    const newUser = this.userRepostory.create(user);
    return await this.userRepostory.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepostory.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepostory.findOne({ where: { id } });
  }
}
