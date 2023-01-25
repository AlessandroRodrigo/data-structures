import { Node } from "./doubly-linked-list-node.entity";

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data: number) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead!.next;
      this.head!.prev = null;
      oldHead!.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(data: number) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current!.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current!.prev;
        count--;
      }
    }

    return current;
  }

  find(data: number) {
    let current = this.head;

    while (current) {
      if (current.data === data) return current;
      current = current.next;
    }

    return null;
  }

  set(index: number, data: number) {
    const node = this.get(index);

    if (node) {
      node.data = data;
      return true;
    }

    return false;
  }
}
