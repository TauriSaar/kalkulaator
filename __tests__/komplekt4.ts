import {mitu_a_tahte} from "../src/a_taht";
test("a_arv", () => {
    expect(mitu_a_tahte("A")).toBe(1);
    expect(mitu_a_tahte("AA")).toBe(2);
    expect(mitu_a_tahte("AAA")).toBe(3);
    expect(mitu_a_tahte("a")).toBe(1);
    expect(mitu_a_tahte("aa")).toBe(2);
    expect(mitu_a_tahte("aaa")).toBe(3);
    expect(mitu_a_tahte("aA")).toBe(2);

});