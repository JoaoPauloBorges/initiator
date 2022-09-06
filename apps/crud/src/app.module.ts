import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresOptions from 'apps/database/postgres.config';
import { CarsModule } from './cars/cars.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forRoot(postgresOptions), CarsModule],
  providers: [JwtStrategy],
})
export class AppModule {}
