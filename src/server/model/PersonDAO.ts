import { Database } from '../Database';
import { Pool } from 'pg';
import { Person } from './Person';

export class PersonDAO {
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
            // this.pool.end();
            resolve(res.rows as Person[]);
          }
        });
      });
    });
  }
}
