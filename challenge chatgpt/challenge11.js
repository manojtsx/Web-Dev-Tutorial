var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.head = -1;
    }
    Queue.prototype.enqueue = function (list) {
        this.head++;
        this.items[this.head] = list;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return "The array is empty";
        }
        else {
            var dequeueItem = this.items[0];
            this.items.splice(0, 1);
            this.head--;
            return dequeueItem;
        }
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return "The array is empty";
        }
        else {
            return this.items[0];
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.head < 0;
    };
    Queue.prototype.seeAll = function () {
        return this.items;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Peeked: ", queue.peek());
console.log("Dequeued: ", queue.dequeue());
console.log("Peeked: ", queue.peek());
console.log("Dequeued: ", queue.dequeue());
console.log("Dequeued: ", queue.dequeue());
console.log("Peeked: ", queue.peek());
