/* Example copied from: https://www.geeksforgeeks.org/implementation-stack-javascript/ */

class Stack {
  // Array is used to implement stack, this is a Last In First Out (LIFO) implementation
  constructor()
  {
      this.items = [];
  }

  push(element)
  {
    // adds an element at the top of the stack
    this.items.push(element);
    return this.items;
  }

  pop()
  {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
      return "Underflow";
    this.items.pop();
    return this.items;
  }

  peek()
  {
    // return the top most element from the stack
    // but doesn't delete it.
    return this.items[this.items.length - 1];
  }

  isEmpty()
  {
    // return true if stack is empty
    return this.items.length == 0;
  }

}

export default Stack;
