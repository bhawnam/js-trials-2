"use strict";


// 1. isHometown

function isHometown(town){
    return town === 'San Francisco';
}

const homeTown = isHometown('Delhi');
console.log(homeTown);

// 2. getFullName

function getFullName(firstname, lastname){
    return `${firstname} ${lastname}`;
}

const fullName1  = getFullName('Gunjan' , 'Amarnani');
const fullName2  = getFullName('Bhawna' , 'Mulchandani');
console.log(fullName1);
console.log(fullName2);

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05){
    const subTotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA'){
        fee = 0.03 * subTotal;
    } else if (state === 'PA'){
        fee = 2;
    } else if (state === 'MA'){
        if (basePrice <= 100){
            fee = 1;
        } else {
            fee = 3;
        }
    }    
    return subTotal + fee
}

const total = calculateTotal(100, 'MA');
console.log(total);