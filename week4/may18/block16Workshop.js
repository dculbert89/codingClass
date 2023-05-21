const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

const discountAmount = .25 // if true
const couponAmount = 10 // if true

function finalAmount (object){
    let subTotal = object.pricePerRefill * object.refills
    
    if (object.subscription) {
        subTotal = subTotal - (subTotal * discountAmount)
        return `Your grand total for ${object.prescription} is $${subTotal}`
    }
    if (object.coupon) {
        subTotal = subTotal - couponAmount
        return `Your grand total for ${object.prescription} is $${subTotal}`
    }
      
    if (object.subscription && object.couponAmount) {
        subTotal = subTotal - (subTotal * discountAmount) - couponAmount
    } 
    
    else {
        return `Your grand total for ${object.prescription} is $${subTotal}`
    }
}


console.log(finalAmount(timmy))
console.log(finalAmount(sarah))
console.log(finalAmount(rocky))