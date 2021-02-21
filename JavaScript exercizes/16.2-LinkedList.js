class Node {
    constructor (element = null){
         this.element = element;
         this.next = null;
    }
}

// linkedlist class
class LinkedList {
    constructor (){
        this.head = null;
        this.size = 0;
    }

    //adds element to the end of the list
    add (element){
        //create new node 
        var node = new Node(element);

        // to store current node    
        var current;

        // if list is empty add element and create head.
        if (this.head == null){
            this.head = node;
        }
        else {
            current = this.head;

            // iterate to the end of the list
            while (current.next){
                current = current.next;
            }

            //add node  
            current.next = node;
        }
        this.size++;
    }

    // returns the head - the first Node
    getFirst(){
        return this.head;
    }


    //itrate Node.next and updates the current next until next is null
    getLast(){
        // takes the head
        let lastNode = this.head;

        if (lastNode){
            // while the next node exists
            while (lastNode.next){
                lastNode = lastNode.next
            }
        }
        // return the last var that the while loop iterate trough. (until next is null)
        return lastNode;
    }

    draw (){
        let current = this.head;
        while (current){
            // log the current node
            console.log(`=> ${current.element}`);

            // update the current to be the next one.
            current = current.next;
        }
    }

    reverse (){
        let current = this.head;
        let previous = null;

        while(current){
            // saves current before changes
            const tmp = current.next;

            // assignt the next node as the last one
            current.next = previous;

            // assign the previous one as the current
            previous = current;

            // make current the next one
            current = tmp;
        }

        // make the head the last current in the iteration
        this.head = previous;

        //return the last current.
        return previous;
    }

    removeKNode(index){
        if (index > 0 && index > this.size){
            return -1;
        } else {
            let it = 0;
            let curr = this.head;
            let prev = null;

            // deleting first element
            if (index== 0){
                this.head = curr.next;
            }
            else {
                // iterate the list until arrival to the index.
                while (it < index){
                    it ++;
                    prev = curr;
                    curr = curr.next;
                }
                //removing the element
                prev.next = curr.next;
            }
            this.size--;

            //return the removed element.
            return curr.element;
        }
    }

    circularLinkedList(){
        if (this.getLast().next == this.head){
            return true;
        }else return false;
    }
}


// let node1 = new Node(5);
// let node2 = new Node(9);
// node1.next = node2;


let li = new LinkedList;

li.add(5);
li.add(10);
li.add(15);
li.add(20);

console.log(li.draw());
li.removeKNode(1);
console.log(li.draw());
