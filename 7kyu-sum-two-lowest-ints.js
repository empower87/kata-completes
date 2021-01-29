function sumTwoSmallestNumbers(numbers) {  
  let newNum =  numbers.sort((a, b) => {
  return a - b
  })
  return newNum[0] + newNum[1]
}