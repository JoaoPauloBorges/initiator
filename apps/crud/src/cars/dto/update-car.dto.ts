import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsPositive, IsOptional } from 'class-validator';

export class UpdateCarDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  model: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  brand: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  color: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPositive()
  year: number;
}
