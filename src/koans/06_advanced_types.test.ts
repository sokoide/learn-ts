import { describe, it, expect } from "vitest";

/**
 * Koans: Advanced Types
 *
 * Mapped Types, Conditional Types, and Template Literal Types
 * enable sophisticated type-level programming.
 */

describe("06_advanced_types.test.ts", () => {
  it("Mapped Types: basic transformation", () => {
    interface Flags {
      option1: boolean;
      option2: boolean;
    }

    // Transform all boolean properties to string properties
    type Options = {
      [K in keyof Flags]: string;
    };

    const opt: Options = {
      option1: "on",
      option2: "off",
    };

    // TODO: Fix the expectation
    expect(typeof opt.option1).toBe("boolean");
  });

  it("Conditional Types: simple check", () => {
    type IsNumber<T> = T extends number ? "yes" : "no";

    type A = IsNumber<number>;
    type B = IsNumber<string>;

    const valA: A = "yes";
    const valB: B = "no";

    // TODO: Fix the expectations
    expect(valA).toBe("no");
    expect(valB).toBe("yes");
  });

  it("Conditional Types: infer keyword", () => {
    // Extracts the return type of a function
    type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

    function greet() {
      return "Hello!";
    }

    type Ret = GetReturnType<typeof greet>;

    const val: Ret = "Hello!";

    // TODO: Fix the expectation
    expect(typeof val).toBe("undefined");
  });

  it("Template Literal Types", () => {
    type Event = "click" | "hover";
    type CallbackName = `on${Capitalize<Event>}`; // "onClick" | "onHover"

    const cb: CallbackName = "onClick";

    // TODO: Fix the expectation
    expect(cb).toBe("");
  });

  it("Branded Types (Nominal simulation)", () => {
    type USD = number & { readonly __brand: "USD" };
    type JPY = number & { readonly __brand: "JPY" };

    const priceUSD = 10 as USD;
    const priceJPY = 1500 as JPY;

    function formatUSD(val: USD) {
      return `$${val}`;
    }

    // formatUSD(priceJPY); // ERROR: JPY is not USD

    // TODO: Fix the expectations
    expect(formatUSD(priceUSD)).toBe("");
    expect(typeof priceUSD).toBe("object"); // Hint: Branding is type-level only!
  });
});
