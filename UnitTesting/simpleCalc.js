//simple functions for performing an operation on 2 numbers
//Note: Testing for inifinity is line 37

//add function
function add(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        return "You must have 2 numbers"
    }

    return a + b
}

//subtract function
function sub(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        return "You must have 2 numbers"
    }

    return a - b
}

//multiply function
function mul(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        return "You must have 2 numbers"
    }

    return a * b
}

//divide function
function div(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        return "You must have 2 numbers"
    }

    //checks for dividing by 0 and infinity
    if( b === 0) {
        return "Infinity"
    }

    return a / b
}

//allows these to be passed to the unit test file simpleCalc.test.js
module.exports = {add, sub, mul, div};