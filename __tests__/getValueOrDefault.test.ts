import { getValueOrDefault } from "../src/getValueOrDefault";

describe("getValueOrDefault", () => {
  it("возвращает значение, если поле есть", () => {
    const user = { name: "Alice" };
    const result = getValueOrDefault(user, "name", "Unknown");
    expect(result).toBe("Alice");
  });

  it("возвращает default, если поле undefined", () => {
    const user = { name: undefined };
    const result = getValueOrDefault(user, "name", "Unknown");
    expect(result).toBe("Unknown");
  });

  it("работает с числовыми значениями", () => {
    const data = { age: 0 };
    const result = getValueOrDefault(data, "age", 18);
    expect(result).toBe(0); // 0 не считается undefined
  });

  it("работает с отсутствующим полем (опционально)", () => {
    const user = {} as { age?: number };
    const result = getValueOrDefault(user, "age", 30);
    expect(result).toBe(30);
  });

  it("работает с булевыми значениями", () => {
    const flags = { isActive: false };
    const result = getValueOrDefault(flags, "isActive", true);
    expect(result).toBe(false);
  });
});
