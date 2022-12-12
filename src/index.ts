import { LinkedList } from "./linked-list";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.prepend(0);

linkedList.insert(2, 10);

linkedList.removeByIndex(2);

console.log(linkedList.print());
