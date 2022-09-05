import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty()
  client_id: string;
  @ApiProperty()
  client_secret: string;
}
