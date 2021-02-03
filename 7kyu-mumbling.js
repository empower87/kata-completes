function accum(s) {
  // your code
  let newS = s.toUpperCase()

  newS = newS.split('')

  let splitted = []
  newS.filter((letter, index) => {
    let indexo = letter.repeat(index).toLowerCase()
  
    splitted.push(`${letter}${indexo}`)
  })
  return splitted.join('-')
}