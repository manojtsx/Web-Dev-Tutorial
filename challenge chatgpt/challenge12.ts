class LinkedListNode<T>{
    data : T;
    next : LinkedListNode<T> | null;

    constructor(data : T){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList<T>{
    private head : LinkedListNode<T> | null;
    constructor(){
        this.head = null;
    }

    insert(data : T):void{
        const newNode = new LinkedListNode<T>(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    delete(data: T):void{
        if(this.head === null){
            return;
        }
        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next!==null){
            if(current.next.data === data){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    display():void{
        let current  = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
    insertAtBeginning(data : T) : void{
        const newNode = new LinkedListNode<T>(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtEnd(data : T) : void{
        const newNode = new LinkedListNode<T>(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next!==null){
                current = current.next;
            }
            current.next = newNode;
        } 
    }
    insertAtPosition(data :T, pos : number):void | string{
        const newNode = new LinkedListNode<T>(data);
        if(pos < 1){
            console.log("Invalid position");
        }
        if(pos === 1 || this.head === null){
            console.log("The list is empty. So inserted at first");
            this.head = newNode;
            return;
        }
            let current = this.head;
            let index = 1;
            while(index < pos - 1 && current.next !== null){
                current = current.next;
                index++;
            }
            newNode.next = current.next;
            current.next = newNode;
    }
    deleteAtBeginning() : void{
        if(this.head === null){
            console.log("The list is empty");
            return;
        }
        let current = this.head;
        this.head = current.next;
    }
    deleteAtEnd() : void{
        if(this.head === null){
            console.log("The list is empty");
            return;
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;
        let previous : LinkedListNode<T> | null = null;
        while(current.next !== null){
            previous = current;
            current = current.next;
        }
        if(previous != null){
            previous.next = null;
        }
    }
    deleteAtPosition(pos : number) : void{
        if(this.head === null){
            console.log("The list is empty");
            return;
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;
        let index = 1;
        while(index < pos && current.next !== null){
            current = current.next;
            index++;
        }
        if(current.next !== null){
            current.next = current.next.next;
        }
    }
}   

var list = new SinglyLinkedList<number>();
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

