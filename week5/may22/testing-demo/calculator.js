// Building an object that contains functions for a a variety of calculations: 

const calculations = {
    sum: (a, b) => {
      return a + b;
    },
    diff: function (a, b) {
      return a - b;
    },
    product: (a, b) => {
      return a * b;
    },
    div: (a, b) => {
      return a / b;
    },
  };
  
  module.exports = calculations;