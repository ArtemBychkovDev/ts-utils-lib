import { pluck } from "../src/pluck";

describe("pluck", () => {
  it("достаёт строковые значения из массива объектов", () => {
    const users = [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" }
    ];

    const result = pluck(users, "name");

    expect(result).toEqual(["Alice", "Bob"]);
  });

  it("достаёт числовые значения из массива объектов", () => {
    const items = [
      { id: 1, price: 100 },
      { id: 2, price: 200 }
    ];

    const result = pluck(items, "price");

    expect(result).toEqual([100, 200]);
  });

  it("возвращает пустой массив при пустом входе", () => {
    const result = pluck([], "anything" as never);
    expect(result).toEqual([]);
  });

  it("работает с полями, у которых разные типы", () => {
    const data = [
      { value: "a", active: true },
      { value: "b", active: false }
    ];

    expect(pluck(data, "active")).toEqual([true, false]);
  });
});
