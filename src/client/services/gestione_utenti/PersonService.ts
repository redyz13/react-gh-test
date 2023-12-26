import { Person } from 'client/interfaces/gestione_utenti/PersonInterface';
import { WEBSERVER } from '../../config';

class PersonService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = WEBSERVER;
  }

  async fetchUsers(): Promise<Person[]> {
    const url = `${this.baseUrl}/users`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data: Person[] = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Error fetching users: ${error.message}`);
      else throw new Error('Unknown error occurred while fetching users.');
    }
  }
}

export default PersonService;
