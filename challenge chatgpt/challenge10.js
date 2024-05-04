var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.head = -1;
    }
    Stack.prototype.push = function (item) {
        this.head++;
        this.items[this.head] = item;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return "The array is empty";
        }
        else {
            var poppedItem = this.items[this.head];
            this.items.splice(this.head, 1);
            this.head--;
            return poppedItem;
        }
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return "No element found";
        }
        else {
            return this.items[this.head];
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.head < 0;
    };
    Stack.prototype.seeAll = function () {
        return this.items;
    };
    return Stack;
}());
var stack = new Stack();
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
