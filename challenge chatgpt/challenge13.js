var DoublyLinkedListNode = /** @class */ (function () {
    function DoublyLinkedListNode(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return DoublyLinkedListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    // Insert at end
    DoublyLinkedList.prototype.insert = function (data) {
        var newNode = new DoublyLinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    //Delete by value
    DoublyLinkedList.prototype.delete = function (value) {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        else {
            var current = this.head;
            while (current) {
                if (current.data === value) {
                    if (current === this.head && current === this.tail) {
                        this.head = null;
                        this.tail = null;
                    }
                    else if (current === this.head) {
                        this.head = current.next;
                        this.head.prev = null;
                    }
                    else if (current === this.tail) {
                        this.tail = current.prev;
                        this.tail.next = null;
                    }
                    else {
                        current.prev.next = current.next;
                        current.next.prev = current.prev;
                    }
                    return;
                }
                current = current.next;
            }
        }
    };
    // Display the list
    DoublyLinkedList.prototype.display = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    // Insert at beginning
    DoublyLinkedList.prototype.insertAtBeginning = function (data) {
        var newNode = new DoublyLinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    };
    // Insert at End 
    DoublyLinkedList.prototype.insertAtEnd = function (data) {
        var newNode = new DoublyLinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    // Insert at Position
    DoublyLinkedList.prototype.insertAtPosition = function (data, pos) {
        var newNode = new DoublyLinkedListNode(data);
        if (this.head === null) {
            console.log("List is empty. So, insert at first");
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            var current = this.head;
            var i = 1;
            while (i < pos && current.next !== null) {
                current = current.next;
                i++;
            }
            if (i < pos) {
                console.log("Position out of range");
                return;
            }
            newNode.next = current.next;
            if (current.next !== null) {
                current.next.prev = newNode;
            }
            newNode.prev = current;
            current.next = newNode;
            if (newNode.next === null) {
                this.tail = newNode;
            }
        }
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.display(); // Output: 1 2 3
list.delete(2);
list.display(); // Output: 1 3
list.insertAtBeginning(0);
list.display(); // Output: 0 1 3
list.insertAtEnd(4);
list.display(); // Output: 0 1 3 4
list.insertAtPosition(2, 2);
list.display(); // Output: 0 1 2 3 4
list.insertAtPosition(5, 5);
list.display(); // Output: 0 1 2 3 4 5
list.insertAtPosition(6, 7); // Output: Position out of range
