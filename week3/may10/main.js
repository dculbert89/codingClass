// const arr = ['dog', 'cat', 'penguin']
// console.log(arr[0])


// const myObj = {
//     'key1': 'value1',
//     key2: 'value2',
// }

// let myKey = 'key2'

// console.log(myObj['key1'])

// const pusheen = {
//     name: 'pusheen',
//     age: 7,
//     color: 'gray and tabby'
// }

// pusheen.sister = 'Stormy';
// pusheen['brother'] = 'Pip';

// // let keyToCheck = 'name';

// console.log(pusheen);
// pusheen.age++;

// console.log(pusheen);

// console.log(pusheen.name);
// console.log(pusheen.age);
// console.log(pusheen.color);
// console.log(pusheen[keyToCheck]);

// const pusheen = {
//     name: 'pusheen',
//     age: 7,
//     color: 'gray and tabby'
// }

// console.log(pusheen);

// const myKeys = Object.keys(pusheen)

// console.log('myKeys', myKeys)

// const values = Object.values(pusheen)
// console.log('values', values)


const graceHopper = {
    first: "Grace",
    last: "Hopper",
    rank: "Rear Admiral",
    myMethod: function(){
        console.log("I am a Method")
    },
    getAge: function(year){
        return year - 1906
    },
    greet: function(name){
        console.log(`Hi ${name} I am ${this.first} ${this.last}`)
    }
};

function sayQuote () {
    console.log("It's easier to ask forgiveness than.....")
}

graceHopper.sayQuote = sayQuote

console.log(graceHopper.getAge(2023));

console.log(graceHopper.greet())
