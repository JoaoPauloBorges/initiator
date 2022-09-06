import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  create(createCarDto: CreateCarDto) {
    return this.carsRepository.save(createCarDto);
  }
  async findAll() {
    return this.carsRepository.findAndCount();
  }
  async findOne(id: number) {
    const car = await this.carsRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException();
    }
    return car;
  }
  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.findOne(id);
    return this.carsRepository.update({ id }, updateCarDto);
  }
  async remove(id: number) {
    await this.findOne(id);
    return this.carsRepository.delete({ id });
  }
}
