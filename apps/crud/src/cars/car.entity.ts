import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  constructor(init?: Partial<Car>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  model: string;

  @Column()
  @ApiProperty()
  brand: string;

  @Column()
  @ApiProperty()
  color: string;

  @Column()
  @ApiProperty()
  year: number;
}
