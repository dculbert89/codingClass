const multiplication = require('./block18Workshop');
const concatOdds = require('./block18Workshop');

describe("multiplication: ", () => {
    test("mulitplication([1],[4]): takes two numbers and mulitplies them together", () => {
        expect(concatOdds([1],[4])).toBe(4);
    })
})

describe("multiplication: ", () => {
    test("mulitplication([5],[2]): takes two numbers and mulitplies them together", () => {
        expect(concatOdds([5],[2])).toBe(10);
    })
})


describe("Only Odds: ", () => {
    test("concatOdds([1,2,3,4,5],[74,34,22,21]): looks at both arrays and returns odd numbers", () => {
        expect(concatOdds([1,2,3,4,5],[74,34,22,21])).toBe(1,3,5,21);
    })
})

describe("Only Odds: ", () => {
    test("concatOdds([13,5,1,11,4],[5,101,3,9]): looks at both arrays and returns odd numbers", () => {
        expect(concatOdds([13,5,1,11,4],[5,101,3,9])).toBe(3,5,9,11,13,101);
    })
})