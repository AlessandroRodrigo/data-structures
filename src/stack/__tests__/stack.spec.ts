import { Stack } from "../stack.entity";

describe("Stack", () => {
  it("should create empty stack", () => {
    const stack = new Stack();

    expect(stack).toBeDefined();
    expect(stack.isEmpty()).toBe(true);
  });

  it("toString method should return empty string", () => {
    const stack = new Stack();

    expect(stack.toString()).toBe("");
  });

  it("should push items", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe("1,2");
  });

  it("should pop items", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("pop should return undefined if stack is empty", () => {
    const stack = new Stack();

    expect(stack.pop()).toBeUndefined();
  });

  it("should peek items", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("peek should return undefined when stack is empty", () => {
    const stack = new Stack();

    expect(stack.peek()).toBeUndefined();
  });

  it("should return size of stack", () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);

    stack.pop();
    stack.pop();

    expect(stack.size()).toBe(0);
  });

  it("should clear stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);

    stack.clear();

    expect(stack.size()).toBe(0);
  });
});
