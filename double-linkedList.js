class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pop() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.tail.prev = null;
            this.length--;
            return this;
        }

    }
    //removes node from start
    shift() {
        if (!this.head) {
            //if list is empty
            return undefined;
        } else {
            let oldHead = this.head;
            if (this.length === 1) {
                this.tail = null;
                this.head = null;
            } else {
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null;
            }

            this.length--;
            return this.oldHead;
        }

    }
    //adds node to start
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            //if list was empty
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            //if list is not empty
            //link newNode next to currentHead
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    //get a node for a given index position
    get(indexPos) {
        //if indexPos is outside range
        if (indexPos < 0 || indexPos >= this.length) {
            return null
        }
        var current;
        var counter;
        if (indexPos <= this.length / 2) {
            //element to the left
            //start from the first
            current = this.head;
            counter = 0
            //traverse till indexPos
            while (counter !== indexPos) {
                current = current.next;
                counter++;
            }

        } else {
            //element to the right
            //start from the prev
            current = this.tail;
            counter = this.length - 1;
            //traverse till indexPos
            while (counter !== indexPos) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }
}