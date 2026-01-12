import { describe, it, expect } from "vitest";

/**
 * Koans: Asynchronous Programming
 *
 * Promises and async/await are the standard ways to handle async operations in TS.
 *
 * Go Comparison:
 * - TS is single-threaded (Event Loop).
 * - 'await' yields control back to the event loop, similar to how goroutines are scheduled,
 *   but without actual parallelism on the same data.
 */

describe("04_async.test.ts", () => {
  it("promise basics: resolve", async () => {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => resolve("done!"), 10);
    });

    const result = await promise;

    // TODO: Fix the expectation
    expect(result).toBe("");
  });

  it("async/await syntax", async () => {
    async function getNumber() {
      return 42; // Returns a Promise<number> automatically
    }

    const val = await getNumber();

    // TODO: Fix the expectation
    expect(val).toBe(0);
  });

  it("handling errors with try/catch", async () => {
    async function fail() {
      throw new Error("BOOM");
    }

    let message = "";
    try {
      await fail();
    } catch (e: any) {
      message = e.message;
    }

    // TODO: Fix the expectation
    expect(message).toBe("");
  });

  it("Promise.all for concurrency", async () => {
    // Similar to waiting for multiple goroutines
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    const results = await Promise.all([p1, p2, p3]);

    // TODO: Fix the expectation
    expect(results).toEqual([]);
  });
});
