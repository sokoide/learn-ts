import { describe, it, expect } from "vitest";

/**
 * Koans: Functions
 *
 * TypeScript supports both named functions and arrow functions.
 * It also allows for optional parameters and default values.
 *
 * Go Comparison:
 * - Basic function syntax is similar.
 * - TypeScript arrow functions are similar to Go anonymous functions.
 * - TypeScript supports optional parameters via '?', which Go does not support directly.
 */

describe("01_functions.test.ts", () => {
  it("named functions and types", () => {
    function add(a: number, b: number): number {
      return a + b;
    }

    // TODO: Fix the expectation
    expect(add(10, 5)).toBe(0);
  });

  it("arrow functions", () => {
    const multiply = (a: number, b: number): number => a * b;

    // TODO: Fix the expectation
    expect(multiply(3, 4)).toBe(0);
  });

  it("optional parameters", () => {
    // The '?' makes the parameter optional.
    function greet(name: string, title?: string): string {
      if (title) {
        return `Hello, ${title} ${name}`;
      }
      return `Hello, ${name}`;
    }

    expect(greet("Alice", "Dr.")).toBe("Hello, Dr. Alice");
    // TODO: Fix the expectation below
    expect(greet("Bob")).toBe("");
  });

  it("default parameters", () => {
    function power(base: number, exponent: number = 2): number {
      return Math.pow(base, exponent);
    }

    expect(power(3, 3)).toBe(27);
    // TODO: Fix the expectation below
    expect(power(4)).toBe(0);
  });

  it("rest parameters", () => {
    // Similar to variadic functions in Go (args ...int).
    function sum(...numbers: number[]): number {
      return numbers.reduce((total, n) => total + n, 0);
    }

    // TODO: Fix the expectation below
    expect(sum(1, 2, 3, 4)).toBe(0);
  });
});
