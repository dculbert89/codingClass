// const hello = "hello"
// const goodbye = "goodbye"
// const welcome = "welcome"

// function greeting(name, type){
//     console.log(type + ' ' + name)
// }

// greeting("David", hello)
// greeting("Sam", goodbye)
// greeting("Maple", welcome)


let totalMoney = 1000

function spendMoney(money){
    totalMoney = totalMoney - money
}

console.log("Starting Money: ", totalMoney)

spendMoney(99)
console.log("Money after 99: ", totalMoney)

spendMoney(200)
console.log("Money after 200: ", totalMoney)