//      10
//  7       15
// 3  8   13   20


/* BST */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        
        if (this.root === null) {
            //means 1st node
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (current.value === val) {
                //means duplicate
                return undefined;
            }

            if (val < current.value) {
                //means to the left
                if (current.left === null) {
                    //means leaf node
                    current.left = newNode;
                    return this;
                }
                //means already node exists on left
                //move current
                current = current.left;
            } else {
                //means to the right
                if (current.right === null) {
                    //means leaf node
                    current.right = newNode;
                    return this;
                }
                //means already node exists on right
                //move current
                current = current.right;
            }


        }
    }
}

var bst = new BinarySearchTree();
bst.insert(10)
bst.insert(7)
bst.insert(8)
bst.insert(15)
bst.insert(13)
bst.insert(20)
bst.insert(3)

