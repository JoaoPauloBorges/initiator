import { User } from 'apps/auth/src/users/user.entity';
import { DataSourceOptions } from 'typeorm';
import { bootstrapEnvironmentVariables } from '../bootstrap-env-var';

bootstrapEnvironmentVariables();

const postgresOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [User],
};
export default postgresOptions;
