import { describe, it, expect } from "vitest";

/**
 * Koans: Union and Intersection Types
 *
 * Unions (|) allow a value to be one of several types.
 * Intersections (&) combine multiple types into one.
 *
 * Go Comparison:
 * - Intersection is similar to struct embedding.
 * - Discriminated Unions are similar to type switching on a struct with a 'type' field.
 */

describe("03_union_intersection.test.ts", () => {
  it("union types basics", () => {
    function format(value: string | number) {
      if (typeof value === "string") {
        return value.toUpperCase();
      }
      return value.toFixed(2);
    }

    // TODO: Fix the expectations
    expect(format("hello")).toBe("");
    expect(format(3.14159)).toBe("");
  });

  it("intersection types basics", () => {
    interface Serializable {
      serialize(): string;
    }
    interface Loggable {
      log(): void;
    }

    // Combined type
    type Persistent = Serializable & Loggable;

    const obj: Persistent = {
      serialize: () => "data",
      log: () => console.log("logging"),
    };

    // TODO: Fix the expectation
    expect(obj.serialize()).toBe("");
  });

  it("discriminated unions", () => {
    interface Success {
      status: "success"; // Discriminant
      data: string;
    }
    interface Failure {
      status: "error"; // Discriminant
      message: string;
    }

    type Response = Success | Failure;

    function handleResponse(res: Response) {
      if (res.status === "success") {
        return res.data;
      } else {
        return res.message;
      }
    }

    // TODO: Fix the expectations
    expect(handleResponse({ status: "success", data: "OK" })).toBe("");
    expect(handleResponse({ status: "error", message: "Failed" })).toBe("");
  });

  it('type guards with "in" operator', () => {
    interface Fish {
      swim: () => string;
    }
    interface Bird {
      fly: () => string;
    }

    function move(animal: Fish | Bird) {
      if ("swim" in animal) {
        return animal.swim();
      }
      return animal.fly();
    }

    const fish: Fish = { swim: () => "swimming" };
    const bird: Bird = { fly: () => "flying" };

    // TODO: Fix the expectations
    expect(move(fish)).toBe("");
    expect(move(bird)).toBe("");
  });
});
