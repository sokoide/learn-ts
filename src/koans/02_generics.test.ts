import { describe, it, expect } from "vitest";

/**
 * Koans: Generics
 *
 * Generics allow you to create reusable components that work with a variety of types.
 *
 * Go Comparison:
 * - TS `<T>` is very similar to Go `[T any]`.
 * - TS `extends` is used for constraints, similar to Go's interface constraints.
 */

describe("02_generics.test.ts", () => {
  it("generic identity function", () => {
    // This function should return exactly what it receives, preserving the type.
    function identity<T>(arg: T): T {
      return arg;
    }

    const output1 = identity<string>("myString");
    const output2 = identity<number>(100);

    // TODO: Fix the expectations
    expect(typeof output1).toBe("undefined");
    expect(output2).toBe(0);
  });

  it("generic array wrapper", () => {
    function wrapInArray<T>(value: T): T[] {
      return [value];
    }

    const wrapped = wrapInArray("hello");

    // TODO: Fix the expectation
    expect(wrapped).toEqual([]);
  });

  it("generic constraints with extends", () => {
    // We want to ensure that T has a .length property.
    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): number {
      return arg.length;
    }

    // It works with strings because strings have a .length property
    const len1 = loggingIdentity("abc");
    // It works with arrays because arrays have a .length property
    const len2 = loggingIdentity([1, 2, 3, 4, 5]);

    // TODO: Fix the expectations
    expect(len1).toBe(0);
    expect(len2).toBe(0);
  });

  it("using multiple generic types", () => {
    function pair<T, U>(first: T, second: U): [T, U] {
      return [first, second];
    }

    const result = pair("age", 25);

    // TODO: Fix the expectations
    expect(result[0]).toBe("");
    expect(result[1]).toBe(0);
  });

  it("generic interfaces", () => {
    interface Wrapper<T> {
      value: T;
    }

    const stringWrapper: Wrapper<string> = { value: "TS" };
    const numberWrapper: Wrapper<number> = { value: 2026 };

    // TODO: Fix the expectations
    expect(stringWrapper.value).toBe("");
    expect(numberWrapper.value).toBe(0);
  });

  it("unknown type and narrowing", () => {
    function getLength(val: unknown): number {
      // You cannot access .length directly on unknown
      // return val.length; // ERROR

      if (typeof val === "string") {
        return val.length;
      }
      return 0;
    }

    // TODO: Fix the expectations
    expect(getLength("typescript")).toBe(0);
    expect(getLength(42)).toBe(10);
  });
});
