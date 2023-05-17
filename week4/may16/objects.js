const shoe = {
    brand: "nike",
    laces: true,
    velcro: false,
    color: "green",
    price: 100000,
    activityType: ["running", "walking"],
    payFor: function() {
        console.log("I paid for the shoe")
    },
    start(){
        console.log("vroom vroom")
    },
};

    // shoe.start()

    // console.table(shoe)

    // delete shoe.start
    // shoe.start = "DELETED THE VROOM VROOM"

    // console.table(shoe)

// for (const key in shoe){

//     console.log(key)
//     console.log(shoe[key])
// }   


// // dot notation
// console.log(shoe.price)

// // bracket notation
// console.log(shoe['price'])

// const arrOfKeys = Object.keys(shoe)
// console.log("Array of Keys", arrOfKeys.length)

console.log("Array of Keys", Object.keys(shoe).length)
console.log("Array of Values", Object.values(shoe))