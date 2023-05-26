function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

// Option1: All functions in one object
// const objHoldingFuncs = {
//     add: (a, b) => {
//         return a+b;
//     }
// }

// Option2: Writing anonymous object and save it to module.eports, and then add all data that we want to export to that anonymous object
module.exports = {
    add: add,
    subtract: subtract
}