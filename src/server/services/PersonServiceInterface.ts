import { Person } from 'server/entity/Person';

export interface PersonServiceInterface {
  getAll(): Promise<Person[]>;
}
