import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import { DataSource } from 'typeorm';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'sfihasas',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../migrations/**/*.ts'],
};

const AppDataSource = new DataSource(config);

export { AppDataSource };
export default config;
