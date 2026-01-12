import { describe, it, expect } from "vitest";

/**
 * Koans: Interfaces and Objects
 *
 * TypeScript interfaces define the shape of an object.
 * They support structural typing (duck typing).
 *
 * Go Comparison:
 * - Interfaces in TS are used both like Go structs (to define data shapes)
 *   and Go interfaces (to define behavior).
 * - Structural typing is exactly how Go interfaces work.
 */

describe("01_interfaces.test.ts", () => {
  it("basic interface definition", () => {
    interface User {
      id: number;
      name: string;
    }

    const alice: User = {
      id: 1,
      name: "Alice",
    };

    expect(alice.id).toBe(1);
    // TODO: Fix the expectation below
    expect(alice.name).toBe("");
  });

  it("optional properties", () => {
    interface Book {
      title: string;
      author: string;
      year?: number; // Optional
    }

    const book1: Book = {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    };

    const book2: Book = {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    };

    expect(book1.year).toBeUndefined();
    // TODO: Fix the expectation below
    expect(book2.year).toBe(0);
  });

  it("structural typing (duck typing)", () => {
    // TypeScript doesn't care about the name of the type, only the structure.
    interface Point {
      x: number;
      y: number;
    }

    function logPoint(p: Point) {
      return `${p.x}, ${p.y}`;
    }

    // This object is not explicitly declared as a 'Point'
    const obj = { x: 10, y: 20, z: 30 };

    // TODO: Fix the expectation below
    // Hint: Even though obj has an extra 'z' property, it still matches 'Point'
    expect(logPoint(obj)).toBe("");
  });

  it("readonly properties", () => {
    interface Config {
      readonly apiKey: string;
    }

    const config: Config = {
      apiKey: "secret-key",
    };

    // config.apiKey = "new-key"; // ERROR: Cannot assign to 'apiKey' because it is a read-only property.

    // TODO: Fix the expectation
    expect(config.apiKey).toBe("");
  });
});
