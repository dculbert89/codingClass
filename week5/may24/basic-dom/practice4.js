// As the backend dev at a health insurance company, you've discovered a deadly issue that could potentially cost the company millions of dollars, if not more. And it's all due to an off by one error... All of the insurance claims have been mislabeled by one single digit, and have to be corrected before claim payments are issued for this quarter.

// First, write some JS code such that customer #12345's claims are corrected in 2 ways:
    // 1) That all the elements with a class of .customer12345-claims have their id attribute changed to the appropriate number (i.e. if the id is 18590, than the new id would be 18591). 
    // 2) That all the elements with a class of .customer12345-claims have their inner text changed to the appropriate claim number text. 

    let customer12345 = document.getElementsByClassName("customer12345-claims")

    for (let i = 0; i < customer12345.length; i++){
    let currentClaimsIdNum = parseInt(customer12345[i].id) + 1;
        
    customer12345[i].id = currentClaimsIdNum
    customer12345[i].innerText =`Claim #${currentClaimsIdNum}`
 }

// Next, write some JS code such that customer #98765's claims are corrected, in the same 2 ways as customer #12345 above.

let customer98765 = document.getElementsByClassName("customer98765-claims")

for (let i = 0; i < customer98765.length; i++){
let currentClaimsIdNum = parseInt(customer98765[i].id) + 1;
    
customer98765[i].id = currentClaimsIdNum
customer98765[i].innerText =`Claim #${currentClaimsIdNum}`
}

// Lastly, write some JS code such that customer #00000's claims are corrected, in the same 2 ways as customer #98765 and customer #12345 above. 

let customer00000 = document.getElementsByClassName("customer00000-claims")

for (let i = 0; i < customer00000.length; i++){
let currentClaimsIdNum = parseInt(customer00000[i].id) + 1;
    
customer00000[i].id = currentClaimsIdNum
customer00000[i].innerText =`Claim #${currentClaimsIdNum}`
}

// let customer98765 = document.getElementsByClassName("customer98765-claims")

// for (let i = 0; i < customer98765.length; i++){
//     let fixedcustomer98765 = customer98765[i];
 
//     fixedcustomer98765.id++

//     fixedcustomer98765.innerText = "Claim #" + fixedcustomer98765.id
//  }

//  let customer00000 = document.getElementsByClassName("customer00000-claims")

// for (let i = 0; i < customer00000.length; i++){
//     let fixedcustomer00000 = customer00000[i];
 
//     fixedcustomer00000.id++

//     fixedcustomer00000.innerText = "Claim #" + fixedcustomer00000.id
//  }