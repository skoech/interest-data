//Array of objects with principal and time values

let data = [
    {principal: 2500, time: 1.5},
    {principal: 1000, time: 1},
    {principal: 3000, time: 5},
    {principal: 2000, time: 3},
];

console.log (data);

//Function that takes array as single argument and determines rate applicable using set of conditions
function interestCalculator (arr) {
    for (obj of arr) {
        if (obj.principal >= 2500 && (obj.time >1 && obj.time < 3)) {
            rate = 3
        } else if 
            (obj.principal >= 2500 && obj.time <= 3) {
                rate = 4
        } else if 
            (obj.principal < 2500 || obj.time <= 1) {
            rate = 2
    } else 
           rate =1

//Calculating interest for each individual object using given formula

let interestData = [];
for (let obj of interestData) {
    obj.interest = (obj.principal * obj.rate * obj.time) / 100;

    interestData = arr;
    console.log (interestData);

    return interestData;
};
    
};

    };


interestCalculator (data);