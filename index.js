const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0;


// let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ 
    // return element * 2 + total}, 0)
// => 12 

let totalBatteries = batteryBatches.reduce(function(total, element) {
    return element + total}, 0)