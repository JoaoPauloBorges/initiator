import { DataSource } from 'typeorm';
import postgresOptions from './postgres.config';

export const AppDataSource = new DataSource(postgresOptions);
