import { Queue } from "..";

describe("Queue", () => {
  it("should create empty queue", () => {
    const queue = new Queue();

    expect(queue).toBeDefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it("toString method should return empty string when queue is empty", () => {
    const queue = new Queue();

    expect(queue.toString()).toBe("");
  });

  it("should enqueue items", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe("1,2");
  });

  it("toString method should return string representation of queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe("1,2");
  });

  it("should dequeue items", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
  });

  it("dequeue should return undefined if queue is empty", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBeUndefined();
  });

  it("should peek items", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeUndefined();
  });

  it("peek should return undefined when queue is empty", () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();
  });

  it("size method should return size of queue", () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size()).toBe(2);
  });

  it("clear method should clear queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size()).toBe(2);

    queue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});

export {};
