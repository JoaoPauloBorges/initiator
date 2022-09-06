import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from '../utils/hashing.utils';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  async createUser(body: UserCreateDto) {
    const password = await encodePassword(body.password);
    const user = await this.usersRepository.save({ ...body, password });
    return new User(user);
  }

  async findAll() {
    return this.usersRepository.find();
  }
}
