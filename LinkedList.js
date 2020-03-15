class _Node {
  constructor(value, next) {
    this.value = value; //value stored
    this.next = next; //points/stores to next node
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insert values
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    //if there is no next node return null
    const nextNode = this.find(key);
    if (!nextNode) {
      console.log("no node with that key found");
      return null;
    } else {
      let currNode = this.head;
      let previousNode = this.head;
      while (currNode !== nextNode && currNode !== null) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      previousNode.next = new _Node(item, nextNode);
      //console.log("previous node", previousNode);
      //console.log("nextnode", nextNode);
    }
  }

  insertAfter(item, key) {
    //if key does not exist return null
    const beforeNode = this.find(key);
    if (!beforeNode) {
      console.log("no node with that key found");
      return null;
    } else {
      //if key is last node then insert last
      if (beforeNode.next === null) {
        this.insertLast(item);
      } else {
        this.insertBefore(item, beforeNode.next.value);
      }
    }
  }

  insertAt(item, pos) {
    if (!this.head) {
      console.log("linked list empty");
      return null;
    }
    let currNode = this.head;
    //if you want to start at index 0 set i to 0, else if you want to count at index at 1 then set i to 1;
    for (let i = 1; i < pos; i++) {
      currNode = currNode.next;
    }
    this.insertBefore(item, currNode.value);
  }

  //Retrieving values
  //Traverse the list, compare values stored in each node with the value you are searching. Return the node when found.
  find(item) {
    //Start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      /*Return null if its the end of the list and the item is not on the list*/
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  //remove node
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }

    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //Start at the head
    let currNode = this.head;
    //Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;
