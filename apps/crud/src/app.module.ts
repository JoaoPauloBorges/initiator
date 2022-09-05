import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresOptions from 'apps/database/postgres.config';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [TypeOrmModule.forRoot(postgresOptions), CarsModule],
})
export class AppModule {}
