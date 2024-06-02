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
    // Delete at beginning
    DoublyLinkedList.prototype.deleteAtBeginning = function () {
        if (this.head === null) {
            console.log("Nothing to delete in list.");
            return;
        }
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
    };
    // Delete at End
    DoublyLinkedList.prototype.deleteAtEnd = function () {
        if (this.head == null) {
            console.log("Nothing to delete in list");
            return;
        }
        this.tail = this.tail.prev;
        if (this.tail !== null) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
    };
    // Delete At position
    DoublyLinkedList.prototype.deleteAtPosition = function (pos) {
        if (this.head === null) {
            console.log("Nothing to delete in list");
            return;
        }
        var current = this.head;
        var i = 1;
        while (i < pos && current.next !== null) {
            current = current.next;
            i++;
        }
        if (i < pos) {
            console.log("position out of range");
            return;
        }
        if (current.prev != null) {
            current.prev.next = current.next;
        }
        else {
            this.head = current.next;
        }
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        else {
            this.tail = current.prev;
        }
    };
    return DoublyLinkedList;
}());
var list1 = new DoublyLinkedList();
console.log('Insertion Operation');
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.display(); // Output: 1 2 3
list1.delete(2);
list1.display(); // Output: 1 3
list1.insertAtBeginning(0);
list1.display(); // Output: 0 1 3
list1.insertAtEnd(4);
list1.display(); // Output: 0 1 3 4
list1.insertAtPosition(2, 2);
list1.display(); // Output: 0 1 2 3 4
list1.insertAtPosition(5, 5);
list1.display(); // Output: 0 1 2 3 4 5
list1.insertAtPosition(6, 7); // Output: Position out of range
console.log('Deletion Operation');
list1.deleteAtBeginning();
list1.display(); // Output: 1 2 3 4 5
list1.deleteAtEnd();
list1.display(); // Output: 1 2 3 4
list1.deleteAtPosition(2);
list1.display(); // Output: 1 3 4
list1.deleteAtPosition(1);
list1.display(); // Output: 3 4
list1.deleteAtPosition(2);
list1.display(); // Output: 3
list1.deleteAtPosition(1);
list1.display(); // Output: Nothing to display in list
list1.deleteAtPosition(1); // Output: Nothing to delete in list
