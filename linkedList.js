class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  push(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.count = 1;
    } else {
      let current = this.head;
      while (current.next) {
        // this.head = this.head.next;
        current = current.next;
      }
      this.count++;
      current.next = node;
    }
  }
  getElementAt(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  removeAt(index) {
    if (index > 0 && index < this.count) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        // let current = this.head;
        // let previous;
        // for (let i = 0; i < index; i++) {
        //   previous = current;
        //   current = current.next;
        // }
        // previous.next = current.next;
        const previous = this.getElementAt(index - 1);
        previous.next = previous.next.next;
      }
      this.count--;
    }
  }
  insert(element, index) {}
}

const link = new LinkedList();

link.push("player1");
link.push("player2");
link.push("player3");
link.push("player4");

console.log(link);
