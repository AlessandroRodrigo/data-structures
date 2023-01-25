export class Node {
  data: number;
  next: Node | null;
  prev: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
