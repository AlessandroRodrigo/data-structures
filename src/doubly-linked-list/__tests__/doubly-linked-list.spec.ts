import { DoublyLinkedList } from "../doubly-linked-list.entity";

describe("Doubly Linked List", () => {
  it("should create an empty list", () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("should append a node to the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).toBe(list.tail);
    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(1);
  });

  it("should append multiple nodes to the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).not.toBe(list.tail);
    expect(list.head?.data).toBe(1);
    expect(list.head?.next?.data).toBe(2);
    expect(list.tail?.data).toBe(3);
    expect(list.tail?.prev?.data).toBe(2);
  });

  it("should remove a node from the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const removedNode = list.pop();
    expect(removedNode?.data).toBe(3);
    expect(list.tail?.data).toBe(2);
    expect(list.tail?.next).toBeNull();
  });

  it("should remove multiple nodes from the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.pop();
    list.pop();
    list.pop();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("pop should return undefined when list is empty", () => {
    const list = new DoublyLinkedList();
    const removedNode = list.pop();
    expect(removedNode).toBeUndefined();
  });

  it("should remove a node from the beginning of the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const removedNode = list.shift();
    expect(removedNode?.data).toBe(1);
    expect(list.head?.data).toBe(2);
    expect(list.head?.prev).toBeNull();
  });

  it("should remove multiple nodes from the beginning of the list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.shift();
    list.shift();
    list.shift();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("shift should return undefined when list is empty", () => {
    const list = new DoublyLinkedList();
    const removedNode = list.shift();
    expect(removedNode).toBeUndefined();
  });

  it("should add a node to the beginning of the list", () => {
    const list = new DoublyLinkedList();
    list.unshift(1);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).toBe(list.tail);
    expect(list.head?.data).toBe(1);
    expect(list.tail?.data).toBe(1);
  });

  it("should add multiple nodes to the beginning of the list", () => {
    const list = new DoublyLinkedList();
    list.unshift(1);
    list.unshift(2);
    list.unshift(3);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).not.toBe(list.tail);
    expect(list.head?.data).toBe(3);
    expect(list.head?.next?.data).toBe(2);
    expect(list.tail?.data).toBe(1);
    expect(list.tail?.prev?.data).toBe(2);
  });

  it("should find a node by value", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const node = list.find(2);
    expect(node?.data).toBe(2);
  });

  it("should return null when value is not found", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const node = list.find(4);
    expect(node).toBeNull();
  });

  it("should get a node by index at beginning of list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const node = list.get(0);
    expect(node?.data).toBe(1);
  });

  it("should get a node by index at end of list", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    const node = list.get(3);
    expect(node?.data).toBe(4);
  });

  it("should set a node by index", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.set(1, 4);
    const node = list.get(1);
    expect(node?.data).toBe(4);
  });

  it("should return false when setting a node by index that does not exist", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    const result = list.set(4, 4);
    expect(result).toBe(false);
  });
});
