const exportedFunctionsObj = require("./functions")

// TEST SUITES
// IF ALL CAPS - NOT SYNTAX
    // Def: Holds collection test for one or multiple functions
    // Skele Syntax:
// describe("A string that is a description for the test suite", () =>{
    // test("A string that is a description for this individual test spec", () => {
        // .EXPECT IS A JEST METHOD THAT WILL RUN A GIVEN FUNCTION AND EVALUATE ITS OUTPUT,AND EXPECT OUTPUT TO BE EQUAL TO SOME VALUE THAT IS OUTLINED BY THE .TOBE METHOD
        // expect(nameOFYourFunction(anyArgumentValuesGoHere)).toBe(theValueYourFunctionSHouldBeOutputting)
    // })
// })

describe("testing add function", () => {
    test("add function if given 1 and 2 to output 3", () => {
        expect(exportedFunctionsObj.add(1, 2)).toBe(3)
    })
})