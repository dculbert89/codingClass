sum()

function sum(){
    console.log('i am +')
}

const substraction = () => {
    console.log('i am -')
}

const division = (num1, num2) => num1 / num2

const nameFunc = param1 => `Hello ${param1}`

console.log(nameFunc('Colton'))


console.log(division(10,2))

// because substration is a variable then it's only defined at line 7
substraction()


const numChecker = (num1) =>{
    if (num1 > 10) {
        return 'greater than 10'
    } else if (num1 > 5){
        return 'greater than 10'
    } else {
        return "Nan"
    }
  }


console.log(numChecker(100))
