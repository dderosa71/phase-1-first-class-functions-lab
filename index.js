// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    let arraryLength = drivers.length;
    return drivers.slice(arraryLength-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// // All this function does is call another function
// //If you don't put in a mutliplier variable to the parent function, it just
// creates a function called multiply that multiplies the input of multiply by itself
// if you do put in a variable in to create fare multiplier,
// it returns the function multiply and multiplies the arguement provided by the 
// arguement provided to the createFareMultiplier function
function createFareMultiplier(multiplier){
       const multiply = fare => fare * multiplier || fare;
            return multiply;
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, unknownFunction){
    return unknownFunction(drivers)
}