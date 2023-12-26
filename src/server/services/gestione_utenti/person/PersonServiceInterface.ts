import { Person } from 'server/entity/gestione_utenti/Person';

export interface PersonServiceInterface {
  getAll(): Promise<Person[]>;
}
