class ListNode<T> {
  data: T;

  next: ListNode<T>;

  constructor(data: T, next: ListNode<T>) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T>;

  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // it handles all the cases - insert at begining, end or middle
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size}`);
    }

    if (index === 0) {
      const node = new ListNode<T>(data, this.head);
      this.head = node;
    } else {
      let nodeJustBeforeIndex = this.head;

      for (let i = 1; i < index; i += 1) {
        nodeJustBeforeIndex = nodeJustBeforeIndex.next;
      }

      const node = new ListNode<T>(data, nodeJustBeforeIndex.next);
      nodeJustBeforeIndex.next = node;
    }

    this.size += 1;
  }

  deleteAt(index: number): void {
    if (this.size === 0) {
      throw Error('List is empty');
    }

    if (index < 0 || index >= this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size - 1}`);
    }

    if (index === 0) {
      const temp = this.head;
      this.head = this.head.next;

      // so that removed node doesn't point to anything and garbage collector can remove it.
      temp.next = null;
    } else {
      let nodeJustBeforeIndex = this.head;
      let nodeAtIndex = this.head.next;

      for (let i = 1; i < index; i += 1) {
        nodeJustBeforeIndex = nodeJustBeforeIndex.next;
        nodeAtIndex = nodeAtIndex.next;
      }

      nodeJustBeforeIndex.next = nodeAtIndex.next;
      nodeAtIndex.next = null;
    }

    this.size -= 1;
  }

  getAt(index: number): ListNode<T> {
    if (index < 0 || index >= this.size) {
      throw Error(`OutOfBound Exception: index should be within 0 and ${this.size - 1}`);
    }

    let nodeFound = this.head;

    for (let i = 0; i < index; i += 1) {
      nodeFound = nodeFound.next;
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
}

export { SinglyLinkedList };
