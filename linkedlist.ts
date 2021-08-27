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
        let newNode = new ListNode(data, this.head);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head = newNode;
        }
        this.counter++;
    }

    append(data: any){
        let newNode = new ListNode(data, null);

        if (!this.head) {
            this.head = newNode;
        }

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
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
                return current;
            } else {
                current = current.next;
            }
        }
        return null;
    }

    deleteFromHead() {

        if (this.head != this.tail) {
                this.head = this.head.next;
                this.counter--;
        } else {
            this.reset();
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
            this.reset();
        }  
    }

    deleteValue(value: any) {
        
        while (this.head && this.head.data === value && this.head != this.tail) {
            this.head = this.head.next;
            this.counter--;
        }
        let current = this.head;

        if (this.head != this.tail && current.next) {

            while (current.next) {
                
                if(current.next.data === value) {
                    current.next = current.next.next;
                    this.counter--;
                } else {
                    current = current.next;
                }
                               
            }

            if (this.tail.data === value) {
                this.tail = current;
            }
            
        }
            

        if (this.head === this.tail && this.head.data === value) {
            this.reset();
        }


    }

    insertAfter(value: any, after: any) {
        let element = this.searchElement(after);
        
        if (element) {
            let newNode = new ListNode(value, element.next);
            element.next = newNode;
            this.counter++;
            if(!newNode.next) {
                this.tail = newNode;
            }
        } else {
            return console.log(`Element ${after} not found in list!`);
        }
    }

    insertBefore(value: any, before: any) {
        let element = this.searchElement(before);
        
        if (element && element === this.head) {
            this.prepend(value);
        } else if (element) {
            let current = this.head;
            
            while(current.next) {
                if (current.next.data === before) {
                    current.next = new ListNode(value, element);
                    this.counter++;
                    return;
                } else {
                    current = current.next;
                }
            }

        } else {
            return console.log(`Element ${before} not found in list!`);
        }
    }

    reset(): void {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }


}

//NODE CLASS
class ListNode {
    
    data: any;
    next: ListNode | null;

    constructor(data: any, next: ListNode | null) {
        this.data = data;
        this.next = next
    }

}
