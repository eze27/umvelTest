import { Connection, createConnection } from 'typeorm';

import config from './config/ormconfig';
import configSeed from './config/ormconfig-seed';

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {

    
    
    const conn = await createConnection(config);
    // const seed = await createConnection(configSeed)
    // //await conn.synchronize(true);
    // await conn.runMigrations();
    // await seed.runMigrations();
    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
    //console.log(`Database connection success. Connection name: '${seed.name}' seed: '${conn.options.database}'`);
  } catch (err) {
    console.log(err);
  }
  return null;
};
