import capitalize from "../src/capitalize";

describe("capitalize", () => {
  it("делает первую букву заглавной", () => {
    expect(capitalize("typescript")).toBe("Typescript");
  });

  it("возвращает пустую строку, если вход пустой", () => {
    expect(capitalize("")).toBe("");
  });

  it("возвращает ту же строку, если первая буква уже заглавная", () => {
    expect(capitalize("Молоко")).toBe("Молоко");
  });

  it("не меняет строку, если первый символ — не буква", () => {
    expect(capitalize("123abc")).toBe("123abc");
  });

  it("работает с кириллицей", () => {
    expect(capitalize("привет")).toBe("Привет");
  });
});
