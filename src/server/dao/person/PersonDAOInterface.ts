import { Pool } from 'pg';
import { Person } from 'server/entity/Person';

export interface PersonDAOInterface {
  pool: Pool;

  getUsers(): Promise<Person[]>;
}
