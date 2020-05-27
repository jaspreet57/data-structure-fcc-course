import { TowerOfHanoi } from './TowerOfHanoi';

// Actual goal is to get steps like A to B move, B to C move.
// below is just for testing my code. But this is not the goal

describe('class TowerOfHanoi', () => {
  it('should move all items to stack C', () => {
    expect.hasAssertions();
    const stackA = [9, 6, 5, 3];
    const stackB = [];
    const stackC = [];

    const problem = new TowerOfHanoi<number>(4, stackA, stackB, stackC);

    problem.solve();

    expect(stackC).toStrictEqual([9, 6, 5, 3]);
  });
});
