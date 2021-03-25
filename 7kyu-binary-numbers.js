// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    // your code
    const newArr = []
    
    for(let i = arr.length; i > 0; i--) {
      console.log(arr[arr.length - i])
      if (arr[arr.length - i] == 1){
        newArr.push(Math.pow(2, i - 1))
        console.log(newArr)
      }
      else {
        newArr.push(0)
      }
    }
    console.log(newArr)
    return newArr.reduce((acc, curr) => acc + curr)
};