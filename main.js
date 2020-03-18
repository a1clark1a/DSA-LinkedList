const LinkedList = require("./LinkedList");

function main() {
  //LINKED LIST instance
  let SLL = new LinkedList();

  //Add these names into SLL
  const names = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];
  names.forEach(name => {
    SLL.insertLast(name);
  });

  //Add tauhida
  SLL.insertLast("Tauhida");

  //Remove husker
  SLL.remove("Husker");

  //insertBefore
  SLL.insertBefore("Athena", "Boomer");

  //insertAfter end of linkedlist
  SLL.insertAfter("Clark", "Tauhida");

  //insertAfter
  SLL.insertAfter("Hotdog", "Helo");

  //insertAt
  SLL.insertAt("Kat", 3);

  //Remove Tauhida
  SLL.remove("Tauhida");

  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(findPrevious(SLL, "Kat"));
  console.log(findLast(SLL));
  console.log(thirdFromEnd(SLL));
  reverseList(SLL);
}

const display = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let tempNode = linkedlist.head;
  while (tempNode !== null) {
    console.log(tempNode.value); //just value
    //console.log(tempNode);
    tempNode = tempNode.next;
  }
};

const size = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let size = 0;
  let tempNode = linkedlist.head;
  while (tempNode !== null) {
    size++;
    tempNode = tempNode.next;
  }
  return size;
};

const isEmpty = linkedlist => {
  return !linkedlist.head ? true : false;
};

const findPrevious = (linkedlist, item) => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let currNode = linkedlist.head;
  let previousNode = linkedlist.head;
  while (currNode.value !== item && currNode !== null) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode;
};

const findLast = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let currNode = linkedlist.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};

const reverseList = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let prev = linkedlist.head;
  let current = linkedlist.head;
  let next = current.next;

  while (next != null) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
  current.next = prev;
  linkedlist.head.next = null;
  linkedlist.head = current;

  return linkedlist;
};

const thirdFromEnd = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let currNode = linkedlist.head;
  while (currNode !== null) {
    if (currNode.next.next.next === null) return currNode;
    currNode = currNode.next;
  }
  return currNode;
};

const middleOfAList = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
};

const sortingAlist = linkedlist => {
  if (!linkedlist.head) {
    return console.log("list empty");
  }
  let previousNode = linkedlist.head;
  let currNode = linkedlist.head;

  while (linkedlist.head !== null) {}
};

main();
