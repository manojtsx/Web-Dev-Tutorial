var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
    }
    SinglyLinkedList.prototype.insert = function (data) {
        var newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    SinglyLinkedList.prototype.delete = function (data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    };
    SinglyLinkedList.prototype.display = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    };
    SinglyLinkedList.prototype.insertAtBeginning = function (data) {
        var newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    };
    SinglyLinkedList.prototype.insertAtEnd = function (data) {
        var newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    SinglyLinkedList.prototype.insertAtPosition = function (data, pos) {
        var newNode = new LinkedListNode(data);
        if (pos < 1) {
            console.log("Invalid position");
        }
        if (pos === 1 || this.head === null) {
            console.log("The list is empty. So inserted at first");
            this.head = newNode;
            return;
        }
        var current = this.head;
        var index = 1;
        while (index < pos - 1 && current.next !== null) {
            current = current.next;
            index++;
        }
        newNode.next = current.next;
        current.next = newNode;
    };
    SinglyLinkedList.prototype.deleteAtBeginning = function () {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        var current = this.head;
        this.head = current.next;
    };
    SinglyLinkedList.prototype.deleteAtEnd = function () {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        var current = this.head;
        var previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        if (previous != null) {
            previous.next = null;
        }
    };
    SinglyLinkedList.prototype.deleteAtPosition = function (pos) {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        var current = this.head;
        var index = 1;
        while (index < pos && current.next !== null) {
            current = current.next;
            index++;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.display(); // Output: (empty)
console.log("********");
list.insert(2);
list.insert(4);
list.insert(6);
list.insert(9);
list.display(); // Output: 2 4 6 9
console.log("********");
list.delete(6);
list.display(); // Output: 2 4 9
console.log("********");
list.insertAtBeginning(1);
list.display(); // Output: 1 2 4 9
console.log("********");
list.insertAtEnd(10);
list.display(); // Output: 1 2 4 9 10
console.log("********");
list.insertAtPosition(5, 3);
list.display(); // Output: 1 2 5 4 9 10 
console.log("********");
list.delete(10);
list.display(); // Output: 1 2 5 4 9
console.log("********");
list.delete(1);
list.display(); // Output: 2 5 4 9
console.log("********");
list.deleteAtBeginning();
list.display(); // Output: 5 4 9
console.log("********");
list.deleteAtEnd();
list.display(); // Output: 5 4
console.log("********");
list.deleteAtPosition(2);
list.display(); // Output: 5
console.log("********");
list.deleteAtPosition(1);
list.display(); // Output: (empty)
console.log("********");
