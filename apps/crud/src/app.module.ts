import { Module } from '@nestjs/common';
import { DatabaseModule } from 'libs/database/src';
import { SharedModule } from 'shrd/shared';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [DatabaseModule, SharedModule, CarsModule],
})
export class AppModule {}
