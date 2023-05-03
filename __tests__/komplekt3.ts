import {isikukood} from "../src/k1";
test('positiivne', () => {
    expect(new isikukood("50504192753").sugu()).toBe("m");
    expect(new isikukood("60504192753").sugu()).toBe("n");
    expect(new isikukood("50504192753").synniaasta()).toBe(2005);
});