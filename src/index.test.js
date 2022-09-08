const { xepelin, findAndMultiply } = require("./index");

describe("Function xepelin", () => {
  it("Input 3", () => {
    const response = xepelin(3);

    expect.assertions(2);

    expect(response).toEqual("Xepe");
    expect(typeof response).toBe("string");
  });

  it("Input 5", () => {
    const response = xepelin(5);

    expect.assertions(2);

    expect(response).toEqual("Lin");
    expect(typeof response).toBe("string");
  });

  it("Input 15", () => {
    const response = xepelin(15);

    expect.assertions(2);

    expect(response).toEqual("Xepelin");
    expect(typeof response).toBe("string");
  });

  it("Input 2", () => {
    const response = xepelin(2);

    expect.assertions(1);

    expect(response).toBeUndefined();
  });
});

describe("Function findAndMultiply", () => {
  it("Find two numbers that when added together result in 2022 and return the product of these numbers - Case 1", () => {
    const response = findAndMultiply([1, 5, 1010, 1012]);

    expect.assertions(2);

    expect(response).toEqual(1022120);
    expect(typeof response).toBe("number");
  });

  it("Find two numbers that when added together result in 2022 and return the product of these numbers - Case 2", () => {
    const response = findAndMultiply([1, 5, 1010, 2024, -2]);

    expect.assertions(2);

    expect(response).toEqual(-4048);
    expect(typeof response).toBe("number");
  });

  it("Find two numbers that when added together result in 2022 and return the product of these numbers - Case 2", () => {
    const response = findAndMultiply([1, 5, 1011, -2]);

    expect.assertions(1);

    expect(response).toBeUndefined();
  });
});
