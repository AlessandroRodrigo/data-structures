import { LinkedList } from "../linked-list.entity";

describe("Linked List", () => {
  it("should create an empty list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("should append a node to the list", () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).toBe(list.tail);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
  });

  it("should prepend a node to the list", () => {
    const list = new LinkedList();
    list.prepend(1);
    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.head).toBe(list.tail);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
  });

  it("should delete a node by value from the list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByValue(3);

    console.log(list.print());

    expect(list.print().join(", ")).toBe("1, 2, 4, 5");
  });

  it("should delete the head node by value from the list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByValue(1);
    expect(list.print().join(", ")).toBe("2, 3, 4, 5");
  });

  it("should delete the tail node by value from the list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByValue(5);

    expect(list.print().join(", ")).toBe("1, 2, 3, 4");
  });

  it("should find a node by value", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    const node = list.find(3);
    expect(node?.value).toBe(3);
  });

  it("should insert a node by index", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.insert(2, 99);
    expect(list.print().join(", ")).toBe("1, 2, 99, 3, 4, 5");
  });

  it("should insert a node by index at the head", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.insert(0, 99);
    expect(list.print().join(", ")).toBe("99, 1, 2, 3, 4, 5");
  });

  it("should insert a node by index at the tail", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.insert(5, 99);
    expect(list.print().join(", ")).toBe("1, 2, 3, 4, 5, 99");
  });

  it("should remove a node by index", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByIndex(2);
    expect(list.print().join(", ")).toBe("1, 2, 4, 5");
  });

  it("should remove the head node by index", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByIndex(0);
    expect(list.print().join(", ")).toBe("2, 3, 4, 5");
  });

  it("should remove the tail node by index", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByIndex(4);
    expect(list.print().join(", ")).toBe("1, 2, 3, 4");
  });

  it("should reverse the list", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.reverse();
    expect(list.print().join(", ")).toBe("5, 4, 3, 2, 1");
  });

  it("should reverse the list with one node", () => {
    const list = new LinkedList();
    list.append(1);
    list.reverse();
    expect(list.print().join(", ")).toBe("1");
  });

  it("should reverse the list with two nodes", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.reverse();
    expect(list.print().join(", ")).toBe("2, 1");
  });

  it("should validate removeByIndex when index param is greater than list length", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.removeByIndex(6);
    expect(list.print().join(", ")).toBe("1, 2, 3, 4, 5");
  });

  it("should validate removeByValue when head is null", () => {
    const list = new LinkedList();
    list.removeByValue(1);
    expect(list.print().join(", ")).toBe("");
  });

  it("should find return null when value is not found", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    const node = list.find(99);
    expect(node).toBeNull();
  });

  it("should validate reverse when head is invalid", () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.print().join(", ")).toBe("");
  });
});
