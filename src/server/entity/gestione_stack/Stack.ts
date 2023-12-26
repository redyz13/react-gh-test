export class Stack {
  private top: number;
  private items: string[];

  public constructor() {
    this.top = -1;
    this.items = [];
  }

  public get peek(): string {
    return this.items[this.top];
  }

  public push(value: string): void {
    this.top += 1;
    this.items[this.top] = value;
  }

  public get getTop(): number {
    return this.top;
  }

  public get getItems(): string[] {
    return this.items;
  }
}
