import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ required: true })
  @IsString()
  model: string;

  @ApiProperty({ required: true })
  @IsString()
  brand: string;

  @ApiProperty({ required: true })
  @IsString()
  color: string;

  @ApiProperty({ required: true })
  @IsPositive()
  year: number;
}
