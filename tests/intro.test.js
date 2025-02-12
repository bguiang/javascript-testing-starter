import { describe, test, it, expect, assert } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA - Arrange, Act, Assert
    // GWT - Given, When, Then

    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(a);
  });

  it("should return the second argument if it is greater", () => {
    // Arrange
    const a = 1;
    const b = 2;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(b);
  });

  it("should return the first argument if equal", () => {
    // Arrange
    const a = 1;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(a);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if both divisible by 3 and 5", () => {
    // Arrange
    const n = 15;

    // Act
    const result = fizzBuzz(n);

    // Assert
    expect(result).toBe("FizzBuzz");
  });
  it("should return Fizz if only divisible by 3", () => {
    // Arrange
    const n = 3;

    // Act
    const result = fizzBuzz(n);

    // Assert
    expect(result).toBe("Fizz");
  });
  it("should return Buzz if only divisible by 5", () => {
    // Arrange
    const n = 5;

    // Act
    const result = fizzBuzz(n);

    // Assert
    expect(result).toBe("Buzz");
  });
  it("should return arg as string if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
