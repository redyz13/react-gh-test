export class Person {
  private name: string;
  private surname: string;

  public constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public get getName(): string {
    return this.name;
  }

  public get getSurname(): string {
    return this.surname;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public set setSurname(surname: string) {
    this.surname = surname;
  }
}
