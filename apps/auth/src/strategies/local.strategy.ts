import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { checkPassword } from '../utils/hashing.utils';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  logger = new Logger(LocalStrategy.name);
  constructor(private usersService: UsersService) {
    super({ usernameField: 'client_id', passwordField: 'client_secret' });
  }

  async validate(username: string, password: string): Promise<any> {
    this.logger.log(`validating user ${username}`);
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const match = await checkPassword(pass, user.password);
      if (!match) {
        return null;
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
