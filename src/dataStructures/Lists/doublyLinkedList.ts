class ListNode<T> {
  data: T;

  next: ListNode<T>;

  prev: ListNode<T>;

  constructor(data: T, prev: ListNode<T>, next: ListNode<T>) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList<T> implements Iterable<T> {
  head: ListNode<T>;

  tail: ListNode<T>;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBegining(data: T): void {
    const node = new ListNode<T>(data, null, this.head);
    this.head = node;
    if (this.size === 0) {
      this.tail = node;
    } else {
      node.next.prev = node;
    }
    this.size += 1;
  }

  insertAtEnd(data: T): void {
    const node = new ListNode<T>(data, this.tail, null);
    this.tail = node;
    if (this.size === 0) {
      this.head = node;
    } else {
      node.prev.next = node;
    }
    this.size += 1;
  }

  // it handles all the cases - insert at begining, end or middle
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size}`);
    }

    if (index === 0) {
      this.insertAtBegining(data);
      return;
    }

    if (index === this.size) {
      this.insertAtEnd(data);
      return;
    }

    const currentNode = this.getAt(index);
    const node = new ListNode<T>(data, currentNode.prev, currentNode);

    node.prev.next = node;
    currentNode.prev = node;

    this.size += 1;
  }

  peekFirst(): T {
    if (this.size === 0) {
      throw Error('List is empty');
    }
    return this.head.data;
  }

  peekLast(): T {
    if (this.size === 0) {
      throw Error('List is empty');
    }
    return this.tail.data;
  }

  deleteFirst(): T {
    if (this.size === 0) {
      throw Error('List is empty');
    }

    const { data } = this.head;
    this.head = this.head.next;

    this.size -= 1;

    if (this.size === 0) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }

    return data;
  }

  deleteLast(): T {
    if (this.size === 0) {
      throw Error('List is empty');
    }

    const { data } = this.tail;

    this.tail = this.tail.prev;

    this.size -= 1;

    if (this.size === 0) {
      this.head = null;
    } else {
      this.tail.next = null;
    }

    return data;
  }

  delete(node: ListNode<T>): T {
    if (node.prev === null) {
      return this.deleteFirst();
    }

    if (node.next === null) {
      return this.deleteLast();
    }

    // eslint-disable-next-line no-param-reassign
    node.next.prev = node.prev;
    // eslint-disable-next-line no-param-reassign
    node.prev.next = node.next;

    const { data } = node;

    // eslint-disable-next-line no-param-reassign
    node.data = null;
    // eslint-disable-next-line no-param-reassign
    node.prev = null;
    // eslint-disable-next-line no-param-reassign
    node.next = null;

    this.size -= 1;

    return data;
  }

  deleteAt(index: number): T {
    if (this.size === 0) {
      throw Error('List is empty');
    }

    if (index < 0 || index >= this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size - 1}`);
    }

    const currentNode = this.getAt(index);

    return this.delete(currentNode);
  }

  getAt(index: number): ListNode<T> {
    if (index < 0 || index >= this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size - 1}`);
    }

    let nodeFound: ListNode<T>;

    if (index < this.size / 2) {
      nodeFound = this.head;

      for (let i = 0; i < index; i += 1) {
        nodeFound = nodeFound.next;
      }
    } else {
      nodeFound = this.tail;

      for (let i = this.size - 1; i > index; i -= 1) {
        nodeFound = nodeFound.prev;
      }
    }

    return nodeFound;
  }

  find(item: T): ListNode<T> {
    let node = this.head;

    while (node) {
      if (node.data === item) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  toArray(): T[] {
    const result: T[] = [];
    let node = this.head;

    while (node) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }

  public [Symbol.iterator](): Iterator<T> {
    let node = this.head;

    return {
      next: (): IteratorResult<T> => {
        if (!node) {
          return { value: null, done: true };
        }

        const nextResult = { value: node.data };
        node = node.next;
        return nextResult;
      },
    };
  }
}

export { DoublyLinkedList };
