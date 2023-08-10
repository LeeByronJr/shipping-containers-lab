import HeavyContainer from "../src/HeavyContainer";

describe("Heavy Container class", () => {
  test(`The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.
    `, () => {
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      15000
    );
    expect(heavyContainer.tareWeight).toBe(500);
    expect(heavyContainer.destination).toBe("Miami");
    expect(heavyContainer.cargoWeight).toBe(15000);
  });
  test(`cargoWeight defaults to 0, when the third constructor parameter is omitted.
    `, () => {
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      undefined
    );
    expect(heavyContainer.cargoWeight).toBe(0);
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)
    `, () => {
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      undefined
    );
    expect(heavyContainer.getGrossWeight()).toBe(500);
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)
    `, () => {
    const heavyContainer: HeavyContainer = new HeavyContainer(
      500,
      "Miami",
      1000
    );
    expect(heavyContainer.getGrossWeight()).toBe(1500);
  });
});
