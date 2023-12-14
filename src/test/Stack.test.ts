import { Stack } from '../server/model/Stack';

describe('My Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual([]);
  });

  it('Can push to the top', () => {
    stack.push('🐈‍⬛');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🐈‍⬛');
  });
});

export {};
