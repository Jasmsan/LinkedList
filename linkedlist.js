//LIST CLASS
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }
    LinkedList.prototype.prepend = function (data) {
        var newNode = new ListNode(data, this.head);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.head = newNode;
        }
        this.counter++;
    };
    LinkedList.prototype.append = function (data) {
        var newNode = new ListNode(data, null);
        if (!this.head) {
            this.head = newNode;
        }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.counter++;
    };
    LinkedList.prototype.toArray = function () {
        var array = [];
        var current = this.head;
        while (current) {
            array.push(current);
            current = current.next;
        }
        return array;
    };
    LinkedList.prototype.searchElement = function (ele) {
        var current = this.head;
        var pos = 0;
        while (current) {
            pos += 1;
            if (current.data === ele) {
                return current;
            }
            else {
                current = current.next;
            }
        }
        return null;
    };
    LinkedList.prototype.deleteFromHead = function () {
        if (this.head != this.tail) {
            this.head = this.head.next;
            this.counter--;
        }
        else {
            this.reset();
        }
    };
    LinkedList.prototype.deleteFromTail = function () {
        if (this.head != this.tail) {
            var current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.counter--;
        }
        else {
            this.reset();
        }
    };
    LinkedList.prototype.deleteValue = function (value) {
        while (this.head && this.head.data === value && this.head != this.tail) {
            this.head = this.head.next;
            this.counter--;
        }
        var current = this.head;
        if (this.head != this.tail && current.next) {
            while (current.next) {
                if (current.next.data === value) {
                    current.next = current.next.next;
                    this.counter--;
                }
                else {
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
    };
    LinkedList.prototype.insertAfter = function (value, after) {
        var element = this.searchElement(after);
        if (element) {
            var newNode = new ListNode(value, element.next);
            element.next = newNode;
            this.counter++;
            if (!newNode.next) {
                this.tail = newNode;
            }
        }
        else {
            return console.log("Element " + after + " not found in list!");
        }
    };
    LinkedList.prototype.insertBefore = function (value, before) {
        var element = this.searchElement(before);
        if (element && element === this.head) {
            this.prepend(value);
        }
        else if (element) {
            var current = this.head;
            while (current.next) {
                if (current.next.data === before) {
                    current.next = new ListNode(value, element);
                    this.counter++;
                    return;
                }
                else {
                    current = current.next;
                }
            }
        }
        else {
            return console.log("Element " + before + " not found in list!");
        }
    };
    LinkedList.prototype.reset = function () {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    };
    return LinkedList;
}());
//NODE CLASS
var ListNode = /** @class */ (function () {
    function ListNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return ListNode;
}());
