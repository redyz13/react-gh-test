export class Stack {
  top: number;
  items: string[];

  constructor() {
    this.top = -1;
    this.items = [];
  }

  get peek(): string {
    return this.items[this.top];
  }

  push(value: string): void {
    this.top += 1;
    this.items[this.top] = value;
  }
}
