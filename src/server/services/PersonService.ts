import { PersonServiceInterface } from './PersonServiceInterface';
import { Person } from 'server/entity/Person';
import { PersonDAOInterface } from 'server/dao/person/PersonDAOInterface';
import { PersonDAO } from 'server/dao/person/PersonDAO';

export class PersonService implements PersonServiceInterface {
  personDAO: PersonDAOInterface;

  constructor() {
    this.personDAO = new PersonDAO();
  }

  getAll(): Promise<Person[]> {
    return this.personDAO.getUsers();
  }
}
