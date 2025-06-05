import { groupBy } from "../src/groupBy";

describe("groupBy", () => {
  it("группирует по строковому полю", () => {
    const data = [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" },
      { name: "Charlie", role: "admin" }
    ];

    const result = groupBy(data, "role");

    expect(result).toEqual({
      admin: [
        { name: "Alice", role: "admin" },
        { name: "Charlie", role: "admin" }
      ],
      user: [
        { name: "Bob", role: "user" }
      ]
    });
  });

  it("группирует по числовому полю", () => {
    const data = [
      { id: 1, group: 10 },
      { id: 2, group: 20 },
      { id: 3, group: 10 }
    ];

    const result = groupBy(data, "group");

    expect(result).toEqual({
      "10": [
        { id: 1, group: 10 },
        { id: 3, group: 10 }
      ],
      "20": [
        { id: 2, group: 20 }
      ]
    });
  });

  it("работает с пустым массивом", () => {
    const result = groupBy([], "role");
    expect(result).toEqual({});
  });

  it("создаёт ключ 'undefined', если поле отсутствует", () => {
    const data = [
      { name: "Alice" },
      { name: "Bob", role: "user" }
    ];

    const result = groupBy(data, "role");

    expect(result).toEqual({
      undefined: [{ name: "Alice" }],
      user: [{ name: "Bob", role: "user" }]
    });
  });
});
