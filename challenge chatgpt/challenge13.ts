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

  // Insert at beginning
  insertAtBeginning(data : T) : void{
    let newNode = new DoublyLinkedListNode<T>(data);
    if(this.head === null){
      this.head = newNode; 
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Insert at End 
  insertAtEnd(data : T) : void {
    let newNode = new DoublyLinkedListNode<T>(data);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // Insert at Position
  insertAtPosition(data : T, pos : number) : void{
    let newNode = new DoublyLinkedListNode<T>(data);
    if(this.head === null){
      console.log("List is empty. So, insert at first");
      this.head = newNode;
      this.tail = newNode;
    }else{
      let current = this.head;
      let i = 1;
      while(i < pos && current.next !== null){
        current = current.next;
        i++;
      }
      if(i < pos){
        console.log("Position out of range");
        return;
      }
      newNode.next = current.next;
      if(current.next !== null){
        current.next.prev = newNode;
      }
      newNode.prev = current;
      current.next = newNode;
      if(newNode.next === null){
        this.tail = newNode;
      }
    }
  }

  // Delete at beginning
  deleteAtBeginning():void{
    if(this.head === null){
      console.log("Nothing to delete in list.");
      return;
    }
    this.head = this.head.next;
    if(this.head !== null){
      this.head.prev = null;
    }
  }

  // Delete at End
  deleteAtEnd():void{
    if(this.head == null){
      console.log("Nothing to delete in list");
      return;
    }
    this.tail = this.tail!.prev;
    if(this.tail !== null){
      this.tail.next = null;
    }else{
      this.head = null;
    }
  }

  // Delete At position
  deleteAtPosition(pos:number){
    if(this.head === null){
      console.log("Nothing to delete in list");
      return;
    }
    let current = this.head;
    let i =1;
    while(i < pos && current.next !== null){
      current = current.next;
      i++;
    }
    if(i < pos){
      console.log("position out of range");
      return;
    }
    if(current.prev != null){
      current.prev.next = current.next;
    }else{
      this.head = current.next;
    }
    if(current.next!==null){
      current.next.prev = current.prev;
    }else{
      this.tail = current.prev;
    }
  }
}

let list2 = new DoublyLinkedList<number>();
console.log('Insertion Operation')
list2.insert(1);
list2.insert(2);
list2.insert(3);
list2.display(); // Output: 1 2 3
list2.delete(2);
list2.display(); // Output: 1 3
list2.insertAtBeginning(0);
list2.display(); // Output: 0 1 3
list2.insertAtEnd(4);
list2.display(); // Output: 0 1 3 4
list2.insertAtPosition(2, 2);
list2.display(); // Output: 0 1 2 3 4
list2.insertAtPosition(5, 5);
list2.display(); // Output: 0 1 2 3 4 5
list2.insertAtPosition(6, 7); // Output: Position out of range
console.log('Deletion Operation')
list2.deleteAtBeginning();
list2.display(); // Output: 1 2 3 4 5
list2.deleteAtEnd();
list2.display(); // Output: 1 2 3 4
list2.deleteAtPosition(2);
list2.display(); // Output: 1 3 4
list2.deleteAtPosition(1);
list2.display(); // Output: 3 4
list2.deleteAtPosition(2);
list2.display(); // Output: 3
list2.deleteAtPosition(1);
list2.display(); // Output: Nothing to display in list
list2.deleteAtPosition(1); // Output: Nothing to delete in list
