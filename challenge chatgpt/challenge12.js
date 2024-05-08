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
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.display();
list.insert(2);
list.insert(4);
list.insert(6);
list.insert(9);
list.display();
list.delete(6);
list.display();
