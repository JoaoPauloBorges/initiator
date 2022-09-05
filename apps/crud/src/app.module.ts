import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import postgresOptions from './database/postgres.config';

@Module({
  imports: [TypeOrmModule.forRoot(postgresOptions), CarsModule],
})
export class AppModule {}
