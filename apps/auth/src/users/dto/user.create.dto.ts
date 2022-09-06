import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserCreateDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  password: string;
}
