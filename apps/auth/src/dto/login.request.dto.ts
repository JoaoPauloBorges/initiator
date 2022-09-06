import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty({ description: 'your username', example: 'johnny' })
  client_id: string;
  @ApiProperty({ description: 'your password', example: 'mySecretPass' })
  client_secret: string;
}
