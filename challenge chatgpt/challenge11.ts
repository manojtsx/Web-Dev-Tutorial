class Queue<T>{
    private items : T[] = [];
    private head : number = -1;
    enqueue(list : T) : void {
        this.head++;
        this.items[this.head] = list;
    }
    dequeue() : T | string{
        if(this.isEmpty()){
            return "The array is empty";
        }else{
            let dequeueItem = this.items[0];
            this.items.splice(0, 1);
            this.head--;
            return dequeueItem;
        }
    }
    peek() : T | string{
        if(this.isEmpty()){
            return "The array is empty";
        }else{
            return this.items[0];
        }
    }
    isEmpty() :boolean{
        return  this.head < 0;
    }
    seeAll() : T[]{
        return this.items;
    }
}

var queue : Queue<number> = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Peeked: ",queue.peek());
console.log("Dequeued: ",queue.dequeue());
console.log("Peeked: ",queue.peek());
console.log("Dequeued: ",queue.dequeue());
console.log("Dequeued: ",queue.dequeue());
console.log("Peeked: ",queue.peek());
