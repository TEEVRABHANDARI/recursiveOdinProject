class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size(){
        let count = 0;
        let currentNode = this.head;
        while(currentNode){
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    at(index){
        if(index < 0 || index >= this.size()){
            throw new Error('Invalid index...');
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    pop(){
        if(!this.head){
            return null;
        }

        let currentNode = this.head;
        let previousNode = null;

        if(!this.head.next){
            this.head = null;
            this.tail = null;
            return currentNode.data;
        }

        while(currentNode.next){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
        this.tail = previousNode;
        return currentNode.value;
    }

    contains(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.data === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value){
        let index = 0;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.data === value){
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return null;
    }

    toString(){
        let string = '';
        let currentNode = this.head;
        while(currentNode){
            string += ` ( ${currentNode.data} ) ->`;
            currentNode = currentNode.next;
        }
        return string.slice();
    }

    insertAt(value, index){
        const newNode = new Node(value);
        let currentNode = this.head;
        let previousNode = null;
        for(let i = 0; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
        currentNode = newNode;
    }

    removeAt(index){
        let currentNode = this.head;
        let previousNode = null;
        for(let i = 0; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
        currentNode.next = null;
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(25, 1)
linkedList.removeAt(2)
linkedList.insertAt(32, 2)

console.log(linkedList.size()); // Output: 4
console.log(linkedList.getHead().data); // Output: 5
console.log(linkedList.getTail().data); // Output: 20
console.log(linkedList.at(0).data); // 5
console.log(linkedList.toString()) // ( 5 ) -> ( 25 ) -> ( 32 ) -> ( 20 ) ->