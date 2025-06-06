import { mergeObjects } from "../src/mergeObjects";

describe("mergeObjects", () => {
  it("объединяет два объекта с разными ключами", () => {
    const obj1 = { name: "Alice" };
    const obj2 = { age: 30 };

    const result = mergeObjects(obj1, obj2);

    expect(result).toEqual({ name: "Alice", age: 30 });
  });

  it("перезаписывает значения из второго объекта", () => {
    const obj1 = { name: "Alice", age: 25 };
    const obj2 = { age: 30 };

    const result = mergeObjects(obj1, obj2);

    expect(result).toEqual({ name: "Alice", age: 30 });
  });

  it("объединяет объекты с разными типами значений", () => {
    const obj1 = { active: true };
    const obj2 = { data: [1, 2, 3] };

    const result = mergeObjects(obj1, obj2);

    expect(result).toEqual({ active: true, data: [1, 2, 3] });
  });

  it("работает с пустым первым объектом", () => {
    const obj1 = {};
    const obj2 = { hello: "world" };

    const result = mergeObjects(obj1, obj2);

    expect(result).toEqual({ hello: "world" });
  });

  it("работает с пустым вторым объектом", () => {
    const obj1 = { hello: "world" };
    const obj2 = {};

    const result = mergeObjects(obj1, obj2);

    expect(result).toEqual({ hello: "world" });
  });
});
