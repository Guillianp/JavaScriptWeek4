// *VERY HARD: You are given coins of different denominations and a total 
// amount of money amount. Write a function to compute the fewest number of coins 
// that you need to make up that amount. If that amount of money cannot be made up 
// by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps 
//  Use functions, arrays and logical operators.  Do not have anyone give you the 
//  answer or solve this problem for you. 

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 

// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1

 

// Note: You may assume that you have an infinite number of each kind of coin.

//my attempt
// var numArray = [1,2,3,4,5,6,7,8]
// const checkEven = (x) =>{
//     for (let i = 0; i < numArray.length; i++){
//         if(numArray[i] % 2 !== 0){
//            return True;
//         }
//     }
// }

// console.log(checkEven(2));

// let evenArray = numArray.filter(checkEven);

// console.log(evenArray);

// //example on the web

// var arrays = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//             var result = arrays.filter((numbers)=>{
//                  if(numbers%2!==0){
//                    console.log(`${numbers} is not even`);
//                  } else {
//                      console.log(`${numbers} is even`);
//                 }
//             });

//create an function that takes an array of integers as an arguement
//the function should take every two elements of the array, add them together, and put them into a new array
//if the orginal array has an odd number of elements, add 500 to the final element and add it to the array
//examples:
//addArray[5,7,100,190,30,5,-10,5] returns [12,290,35,-5]
//addArray[30,7,8,20,24] returns [37,28,524]
//This function determines returns if an array has an odd or even number of elements.
//Feel free to use the isArrOdd function in the function you create.

const total = (acc, value) => acc + value;


function changeReturn(money = [], amount){
    if (amount <= 0){
        return -1
    } else if (money.includes(0) && money.length === 1 && amount >0){
        return -1
    }else{
        return coinWays(amount, money)
    }
    
}

function coinWays(amount, denominations =[]){
    var coins = [];
    
    if (denominations.length === 1 && amount % denominations.reduce(total) !=0){
      return -1
    }
    else{
      while(amount !=0 || coins.reduce(total) === amount) {
        if(amount >= 50 && denominations.includes(50)){
            coins.push(50);
            amount -= 50;
        }else if(amount >= 25 && denominations.includes(25)) {
            coins.push(25);
            amount -= 25; 
        }else if(amount >= 10 && denominations.includes(10)) {
            coins.push(10);
            amount -= 10;
        }else if(amount >= 5 && denominations.includes(5)) {
            coins.push(5);
            amount -= 5;
        }else if(amount >= 1 && denominations.includes(1)) {
            coins.push(1);
            amount -= 1;
        }else{
            coins.push(-1);
        }
    }
    }

    if (coins.includes(-1)){
        return -1;
    }
    else {
        return coins.length;
    }
}


var coins1 = [25]
var value1 = 90;
console.log(changeReturn(coins1, value1));

var coins2 = [25, 5, 1];
var value2 = 90;
console.log(changeReturn(coins2, value2));

var coins3 = [0];
var value3 = 10;
console.log(changeReturn(coins3, value3));

var coins3 = [10];
var value3 = 10;
console.log(changeReturn(coins3, value3));