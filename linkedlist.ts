//LIST CLASS
class LinkedList {
    
    head: ListNode;
    tail: ListNode;
    counter: number;
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }

    prepend(data: any) {
        const nuevo = new ListNode(data, null);
        if (!this.head){
            this.head = nuevo;
            this.tail = this.head;
        } else {
            nuevo.next = this.head;
            this.head = nuevo;
        }
        this.counter++;
    }

    append(data: any){
        const nuevo = new ListNode(data, null);
        this.tail.next = nuevo;
        this.tail = nuevo;
        this.counter++;
    }

    toArray(){
        const array: ListNode[] = [];
        let current: ListNode = this.head;
        while (current) {
            array.push(current);
            current = current.next;
        }
        return array;
    }

    searchElement(ele: any){
        let current: ListNode = this.head;
        let pos = 0;
        while(current){
            pos += 1;
            if(current.data === ele){
                return `Value ${ele} found at position: ${pos}`;
            } else {
                current = current.next;
            }
        }
        return `Value ${ele} not found`;
    }

    deleteFromHead() {

        if (this.head != this.tail) {
                this.head = this.head.next;
                this.counter--;
        } else {
            ListaEnlazada = new LinkedList();
        }    

    }

    deleteFromTail() {

        if (this.head != this.tail) {
            let current: ListNode = this.head;

                while (current.next.next) {
                    current = current.next;
                }
                current.next = null;
                this.tail = current;
                this.counter--;

        } else {
            ListaEnlazada = new LinkedList();
        }  
    }

    deleteValue(value: any) {
        
        while (this.head && this.head.data === value && this.head != this.tail) {
            this.head = this.head.next;
        }
        let current = this.head;

        if (this.head != this.tail && current.next) {

            while (current.next && current.next.data === value) {
                current.next = current.next.next;
            }
            if (this.tail.data === value) {
                this.tail = current;
            }
        }

        if (this.head === this.tail && this.head.data === value) {
            ListaEnlazada = new LinkedList();
        }


    }


}

//NODE CLASS
class ListNode {
    
    data: any;
    next: ListNode;

    constructor(data: any, next: ListNode) {
        this.data = data;
        this.next = next
    }

}

var ListaEnlazada = new LinkedList();

ListaEnlazada.prepend(10);
ListaEnlazada.prepend(20);
ListaEnlazada.prepend(30);
ListaEnlazada.append(40);
ListaEnlazada.append(50);
ListaEnlazada.append(60);

console.log(ListaEnlazada.toArray());
//console.log(ListaEnlazada.counter);
//console.log(ListaEnlazada);
//console.log(ListaEnlazada.searchElement(100));
//console.log(ListaEnlazada.searchElement(50));

ListaEnlazada.deleteFromHead();
ListaEnlazada.deleteFromHead();
ListaEnlazada.deleteFromHead();
ListaEnlazada.deleteFromTail();
ListaEnlazada.deleteFromTail();
console.log(ListaEnlazada.toArray());
//console.log(ListaEnlazada.counter);
//console.log(ListaEnlazada);

ListaEnlazada.prepend(30);
ListaEnlazada.append(40);

console.log(ListaEnlazada.toArray());

ListaEnlazada.deleteValue(40);

console.log(ListaEnlazada.toArray());

ListaEnlazada.deleteValue(30);

console.log(ListaEnlazada.toArray());
//console.log(ListaEnlazada.tail);