import { Stack } from '../server/entity/Stack';

describe('My Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Is created empty', () => {
    expect(stack.getTop).toBe(-1);
    expect(stack.getItems).toEqual([]);
  });

  it('Can push to the top', () => {
    stack.push('🐈‍⬛');
    expect(stack.getTop).toBe(0);
    expect(stack.peek).toBe('🐈‍⬛');
  });
});

export {};
