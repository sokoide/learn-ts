import { describe, it, expect } from 'vitest';

/**
 * Koans: Advanced Classes
 * 
 * Abstract classes, access modifiers, and parameter properties.
 */

describe('07_advanced_classes.test.ts', () => {
  it('abstract classes and methods', () => {
    abstract class Animal {
      abstract makeSound(): string;
      move() { return "moving..."; }
    }

    class Dog extends Animal {
      makeSound() { return "Woof!"; }
    }

    const dog = new Dog();

    // TODO: Fix the expectations
    expect(dog.makeSound()).toBe("");
    expect(dog.move()).toBe("");
  });

  it('access modifiers: protected', () => {
    class Person {
      constructor(protected name: string) {}
    }

    class Employee extends Person {
      getName() {
        return this.name; // Accessible because it's protected
      }
    }

    const emp = new Employee("Alice");

    // TODO: Fix the expectation
    expect(emp.getName()).toBe("");
  });

  it('parameter properties shorthand', () => {
    class User {
      // Shorthand for field declaration + initialization
      constructor(public name: string, private age: number) {}
      
      getAge() { return this.age; }
    }

    const user = new User("Bob", 25);

    // TODO: Fix the expectations
    expect(user.name).toBe("");
    expect(user.getAge()).toBe(0);
  });

  it('getters and setters', () => {
    class Account {
      private _balance: number = 0;

      get balance() { return this._balance; }
      set balance(value: number) {
        if (value >= 0) this._balance = value;
      }
    }

    const acc = new Account();
    acc.balance = 100;

    // TODO: Fix the expectation
    expect(acc.balance).toBe(0);
  });
});
