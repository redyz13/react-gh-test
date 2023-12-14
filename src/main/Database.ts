import { Pool } from 'pg';

export class Database {
  private static pool: Pool;
  private static config = {
    user: 'postgres',
    host: '18.153.82.82',
    database: 'test',
    password: 'paolo',
    port: 5432,
  };

  private constructor() {}

  public static getInstance(): Pool {
    if (!Database.pool) Database.pool = new Pool(Database.config);
    return Database.pool;
  }
}
