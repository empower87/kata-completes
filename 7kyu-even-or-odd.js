function evenOrOdd(str) {
  let odd = 0
  let even = 0
  for (let i of str) {
    if (i % 2 ===0) {
      even += i * 1
    }
      else {
        odd += i * 1
    }
  } 

  if (odd > even) {
    return 'Odd is greater than Even'
  }
  else if (even > odd) {
    return 'Even is greater than Odd'
  }
  else {
    return 'Even and Odd are the same'
  }

}