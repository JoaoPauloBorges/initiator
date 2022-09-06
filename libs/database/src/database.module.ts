import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresOptions from './postgres.config';

@Module({
  imports: [TypeOrmModule.forRoot(postgresOptions)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
