import Stack from "../src/stack";

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

/* hice un cambio cualquiera */

let stack;

describe("Stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  describe("push", () => {
    test("adds an element successfully", () => {
      expect(stack.push('Jane Doe')).toContain('Jane Doe');
    });

  
  describe("pop", () => {
    test("remove an item from the stack", () => {
      stack.push('Jane Doe');
      
      expect(stack.pop()).not.toContain('Jane Doe');
    });

    test("remove an item from an empty stack", () => {
      expect(stack.pop()).toEqual('Underflow');
    });
  });

  
  describe("peek", () => {
    test("shows the latest inserted item from the stack (LIFO)", () => {
      stack.push('Jane Doe');
      stack.push('John Doe');
      stack.push('Lauren Doe');

      expect(stack.peek()).toEqual('Lauren Doe');
    });

    test("peek from an empty stack", () => {
      console.log(stack.items)
      expect(stack.peek()).toBeUndefined();
    });
  });
  
  describe("isEmpty", () => {
    test("empty stack", () => {
      expect(stack.isEmpty()).toBeTruthy();
    });

    test("not empty stack", () => {
      stack.push('Jane Doe');

      expect(stack.isEmpty()).toBeFalsy();
    });
  });
});
});
