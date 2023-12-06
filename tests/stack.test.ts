class Stack {
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

describe('My Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual(['']);
  });

  it('Can push to the top', () => {
    stack.push('🐈‍⬛');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🐈‍⬛');
  });
});
