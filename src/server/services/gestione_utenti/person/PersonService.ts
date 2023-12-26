import { Person } from 'server/entity/gestione_utenti/Person';
import { PersonDAO } from 'server/dao/gestione_utenti/person/PersonDAO';
import { PersonDAOInterface } from 'server/dao/gestione_utenti/person/PersonDAOInterface';
import { PersonServiceInterface } from './PersonServiceInterface';

export class PersonService implements PersonServiceInterface {
  personDAO: PersonDAOInterface;

  constructor() {
    this.personDAO = new PersonDAO();
  }

  getAll(): Promise<Person[]> {
    return this.personDAO.getUsers();
  }
}
