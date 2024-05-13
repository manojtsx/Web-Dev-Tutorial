class DoublyLinkedListNode<T> {
  data: T;
  prev: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Insert at end
  insert(data: T): void {
    const newNode = new DoublyLinkedListNode<T>(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  //Delete by value
  delete(value: T): void {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    } else {
      let current = this.head;
      while (current) {
        if (current.data === value) {
          if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            this.head = current.next;
            this.head!.prev = null;
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail!.next = null;
          } else {
            current.prev!.next = current.next;
            current.next!.prev = current.prev;
          }
          return;
        }
        current = current.next!;
      }
    }
  }

  // Display the list
  display(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new DoublyLinkedList<number>();
list.insert(1);
list.insert(2);
list.insert(3);
list.display(); // Output: 1 2 3
list.delete(2);
list.display(); // Output: 1 3