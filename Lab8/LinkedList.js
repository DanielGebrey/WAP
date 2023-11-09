
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }

    remove(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current && current.data !== data) {
        previous = current;
        current = current.next;
      }
  
      if (current) {
        previous.next = current.next;
      }
    }
  
    print() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(`LinkedList{${elements.join(",")}}`);
    }
  }
  
  let linkedlist = new LinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); 
  
  linkedlist.remove(2);
  linkedlist.print(); 
  