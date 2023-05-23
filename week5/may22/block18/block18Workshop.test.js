const concatOdds = require('./block18Workshop');

describe("Only Odds: ", () => {
    test("concatOdds([1,2,3,4,5],[74,34,22,21]): looks at both arrays and returns odd numbers", () => {
        expect(concatOdds([1,2,3,4,5],[74,34,22,21])).toBe(1,3,5,21);
    })
})