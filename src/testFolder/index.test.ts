import { testMethod } from './index';

describe('testFolder', () => {
  it('should run', () => {
    expect.assertions(1);

    expect(testMethod(3)).toBe(4);
  });
});
