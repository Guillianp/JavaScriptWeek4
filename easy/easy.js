// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

// Example 1:

// Input: [1 , 4 , 7]  Output: 4

// Input: [10, 5]  Output: 7.5

// Input: [1.5, 3, 2.5, 1]  Output: 2

const averageArray = [1 , 4 , 7];
const reducer = (value1, value2) => value1 + value2;

const average = (x=[]) =>{
    const avg = x.reduce(reducer)/ x.length

    return avg
}

console.log(average(averageArray))