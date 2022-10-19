const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//first one in last one out
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    //creating our new node with the data
    const newItem = new Node(data);
    //we're setting the newItems NEXT box to the current top
    newItem.next = this.top;
    //we're making the newItem the top
    this.top = newItem;
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  pop() {
    const item = this.top;

    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let node = this.top;
    let min = 0;

    while (node) {
      if (node < node.next) {
        min = node.data;
      }
      node = node.next;
    }

    return min;
  }

  peek() {
    return this.top;
  }

  sort() {

    
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  count() {
    let count = 0;
    let node = this.first;
  }

  dequeue() {
    let item = this.first; 
    if (this.first === this.last){
      this.last = null; 
    }

    this.first = this.first.next;
    this.size --;
  
    return item.data;
  }

  enqueue(data) {
    let newItem = new Node(data);

    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  findMax() {
   
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    return this.first;
  }
}

// console.log(new Stack(nums));
// console.log(new Queue(words));

module.exports = {
  Node,
  Queue,
  Stack,
};
