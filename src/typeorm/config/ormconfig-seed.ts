import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const configSeed: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/typeorm/entities/**/*{.ts,.js}'],
  migrations: ['src/typeorm/seeds/**/*.{.ts,.js}'],
  subscribers: ['src/typeorm/subscriber/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/typeorm/entities',
    migrationsDir: 'src/typeorm/seeds',
    subscribersDir: 'src/typeorm/subscriber',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = configSeed;
