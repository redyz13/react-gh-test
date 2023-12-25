import { Database } from '../../Database';
import { Pool } from 'pg';
import { Person } from '../../entity/Person';
import { PersonDAOInterface } from './PersonDAOInterface';

export class PersonDAO implements PersonDAOInterface {
  pool: Pool;

  constructor() {
    this.pool = Database.getInstance();
  }

  getUsers(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM PERSON', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Person[]);
          }
        });
      });
    });
  }
}
