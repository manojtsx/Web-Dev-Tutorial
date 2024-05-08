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
}   

var list = new SinglyLinkedList<number>();
list.display();
list.insert(2);
list.insert(4);
list.insert(6);
list.insert(9);
list.display();
list.delete(6);
list.display();
