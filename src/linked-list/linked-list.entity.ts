import { LinkedListNode } from "./linked-list-node.entity";

export class LinkedList {
  head: LinkedListNode | null = null;
  tail: LinkedListNode | null = null;
  length = 0;

  append(value: number) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value: number) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index: number, value: number) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new LinkedListNode(value);
    const leader = this.indexOf(index - 1);

    if (!leader) {
      return this.prepend(value);
    }

    const holdingPointer = leader!.next;
    leader!.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  removeByIndex(index: number) {
    if (index >= this.length) {
      return;
    }
    const leader = this.indexOf(index - 1);

    if (!leader) {
      this.head = this.head!.next;
      this.length--;
      return;
    }

    const unwantedNode = leader!.next;
    leader!.next = unwantedNode!.next;
    this.length--;
  }

  removeByValue(value: number) {
    if (this.head === null) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  indexOf(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      if (currentNode === null) {
        return null;
      }

      currentNode = currentNode!.next;
      counter++;
    }
    return currentNode;
  }

  find(value: number) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  reverse() {
    if (!this.head) {
      return null;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head!.next = null;
    this.head = first;
  }

  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
