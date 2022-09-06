import { DataSource } from 'typeorm';
import postgresOptions from './src/postgres.config';

export const AppDataSource = new DataSource(postgresOptions);
