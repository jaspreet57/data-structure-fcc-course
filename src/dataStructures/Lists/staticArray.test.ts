import { getStaticArray } from './staticArray';

describe('staticArray', () => {
  it('should return an array of given length', () => {
    expect.hasAssertions();

    const a = getStaticArray<string>(4);
    expect(a instanceof Array).toBe(true);
    expect(a).toHaveLength(4);
  });

  describe('returned array', () => {
    it('should allow to assign/access value at any index less that total length', () => {
      expect.hasAssertions();

      const a = getStaticArray<string>(4);
      a[3] = '2';

      expect(a[3]).toBe('2');
      expect(a[2]).toBeUndefined();
    });

    it('should throw error on assigning any value outside total length', () => {
      expect.hasAssertions();
      const a = getStaticArray<string>(4);

      expect(() => {
        a[5] = '2';
      }).toThrow(TypeError);
    });
  });
});
