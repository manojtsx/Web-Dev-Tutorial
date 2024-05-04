class Stack<T> {
  private items: T[] = [];
  private head: number = -1;
  push(item: T): void {
    this.head++;
    this.items[this.head] = item;
  }
  pop(): T | string {
    if (this.isEmpty()) {
      return "The array is empty";
    } else {
      var poppedItem = this.items[this.head];
      this.items.splice(this.head, 1);
      this.head--;
      return poppedItem;
    }
  }
  peek(): T | string {
    if (this.isEmpty()) {
      return "No element found";
    } else {
      return this.items[this.head];
    }
  }
  isEmpty(): boolean {
    return this.head < 0;
  }
  seeAll(): T[] | undefined{
    return this.items;
  }
}

var stack = new Stack<number>();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.seeAll());
