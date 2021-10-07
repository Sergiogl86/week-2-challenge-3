const calculadora = require("./calculator");

describe("Test calculator function", () => {
  test("When pos selector is 0, operation is (+), and return num1 (2) + num2 (3) -> 5", () => {
    // AAA -> Arrange  Act  Assert
    // expect(add(2, 3)).toBe(5);
    console.log(calculadora);
    // Arrange
    const pos = 0;
    const num1 = 2;
    const num2 = 3;
    const expected = 5;

    // Act

    const result = calculadora(num1, num2, pos);

    // Assert

    expect(result).toBe(expected);
  });
  test("When pos selector is 1, operation is (-), and return num1 (6) - num2 (3) -> 3", () => {
    // AAA -> Arrange  Act  Assert
    // expect(add(2, 3)).toBe(5);
    console.log(calculadora);
    // Arrange
    const pos = 1;
    const num1 = 6;
    const num2 = 3;
    const expected = 3;

    // Act

    const result = calculadora(num1, num2, pos);

    // Assert

    expect(result).toBe(expected);
  });
});
