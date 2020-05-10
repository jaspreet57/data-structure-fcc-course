import { SinglyLinkedList } from './singlyLinkedList';

describe('class SinglyLinkedList', () => {
  it('should give empty array if nothing set', () => {
    expect.hasAssertions();

    const list = new SinglyLinkedList<string>();

    expect(list.toArray()).toStrictEqual([]);
  });

  describe('insertAt', () => {
    it('should insert data at given index', () => {
      expect.hasAssertions();

      const list = new SinglyLinkedList<string>();

      list.insertAt(0, 'a');

      expect(list.size).toBe(1);
      expect(list.getAt(0).data).toBe('a');
      expect(list.toArray()).toStrictEqual(['a']);

      list.insertAt(1, 'b');

      expect(list.size).toBe(2);
      expect(list.getAt(1).data).toBe('b');
      expect(list.getAt(1).next).toBeNull();
      expect(list.toArray()).toStrictEqual(['a', 'b']);

      list.insertAt(1, 'c');

      expect(list.size).toBe(3);
      expect(list.getAt(1).data).toBe('c');
      expect(list.getAt(2).data).toBe('b');
      expect(list.getAt(2).next).toBeNull();
      expect(list.toArray()).toStrictEqual(['a', 'c', 'b']);

      list.insertAt(0, 'd');

      expect(list.size).toBe(4);
      expect(list.getAt(0).data).toBe('d');
      expect(list.getAt(1).data).toBe('a');
      expect(list.getAt(3).next).toBeNull();
      expect(list.toArray()).toStrictEqual(['d', 'a', 'c', 'b']);
    });

    it('should throw error if tried to insert at index out of bound', () => {
      expect.hasAssertions();

      const list = new SinglyLinkedList<string>();

      list.insertAt(0, 'a');
      list.insertAt(1, 'b');

      expect(() => {
        list.insertAt(3, 'c');
      }).toThrow(new Error('OutOfBound Exception: index should be within 0 and 2'));
    });
  });

  describe('deleteAt', () => {
    it('should delete data at given index', () => {
      expect.hasAssertions();

      const list = new SinglyLinkedList<string>();

      list.insertAt(0, 'd');
      list.insertAt(0, 'c');
      list.insertAt(0, 'b');
      list.insertAt(0, 'a');

      expect(list.toArray()).toStrictEqual(['a', 'b', 'c', 'd']);

      list.deleteAt(2);

      expect(list.toArray()).toStrictEqual(['a', 'b', 'd']);
      expect(list.getAt(2).next).toBeNull();

      list.deleteAt(2);

      expect(list.toArray()).toStrictEqual(['a', 'b']);
      expect(list.getAt(1).next).toBeNull();

      list.deleteAt(0);
      expect(list.toArray()).toStrictEqual(['b']);
      expect(list.getAt(0).next).toBeNull();

      list.deleteAt(0);
      expect(list.toArray()).toStrictEqual([]);
      expect(list.size).toBe(0);
      expect(list.head).toBeNull();
    });

    it('should throw error if tried to insert at index out of bound or when list is empty', () => {
      expect.hasAssertions();

      const list = new SinglyLinkedList<string>();

      list.insertAt(0, 'a');
      list.insertAt(1, 'b');

      expect(() => {
        list.deleteAt(3);
      }).toThrow(new Error('OutOfBound Exception: index should be within 0 and 1'));

      list.deleteAt(0);
      list.deleteAt(0);

      expect(() => {
        list.deleteAt(0);
      }).toThrow(new Error('List is empty'));
    });
  });
});
