import { describe, it, expect } from "vitest";

/**
 * Koans: Variables and Basic Types
 *
 * TypeScript has three main primitive types: string, number, and boolean.
 * We use 'const' for values that won't be reassigned, and 'let' for those that will.
 *
 * Go Comparison:
 * - 'let' is similar to 'var' or ':='
 * - 'const' is similar to 'const'
 * - 'number' covers both int and float in Go.
 */

describe("01_variables.test.ts", () => {
  it("const vs let: assignment", () => {
    const fixedValue = 10;
    let variableValue = 20;

    // fixedValue = 11; // UNCOMMENTING THIS WILL CAUSE A COMPILE ERROR

    variableValue = 21;

    expect(fixedValue).toBe(10);
    // TODO: Change the expected value below to make the test pass
    expect(variableValue).toBe(0);
  });

  it("basic types: number", () => {
    // TypeScript numbers are double-precision 64-bit binary format IEEE 754.
    const pi: number = 3.14;
    const count: number = 42;

    expect(typeof pi).toBe("number");
    // TODO: Fix the expectation below
    expect(count).toBe(0);
  });

  it("basic types: string", () => {
    const message: string = "Hello TypeScript";

    // TODO: Fix the expectation below
    expect(message).toBe("");
  });

  it("basic types: boolean", () => {
    const isReady: boolean = true;

    // TODO: Fix the expectation below
    expect(isReady).toBe(false);
  });

  it("type inference", () => {
    // TypeScript can infer the type based on the assigned value.
    // Similar to name := "Serena" in Go.
    let name = "Serena";

    // TODO: Fix the expectation below
    expect(typeof name).toBe("undefined");
  });
});
