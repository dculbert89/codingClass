const calculations = require("./calculator");

describe("Calculator Tests:", () => {
  test("sum(1, 2): adding 1 + 2 should return 3", () => {
    expect(calculations.sum(1, 2)).toBe(3);
  });

  test("diff(17, 5): subtracting 17 - 5 should return 12", function () {
    expect(calculations.diff(17, 5)).toBe(12);
  });

  test("product(7, 8): multiplying 7*8 should return 56", () => {
    expect(calculations.product(7, 8)).toBe(56);
  });

  test("product(3, 4): multiplying 3*4 should return 12", () => {
    expect(calculations.product(3, 4)).toBeCloseTo(12);
  });

  test("div(12, 3), dividing 12/3 should return 4", () => {
    expect(calculations.div(12, 3)).toBeCloseTo(4);
  });
});