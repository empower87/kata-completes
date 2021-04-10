// dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

// data and towns can be seen in "Your Test Cases:".

// Task:
// function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
// function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

function mean(town, strng) {
    // Your code
  console.log(`this is mean town: ${town}`)
  var rainNumArray
  const getTown = strng.split("\n").map((each) => each.split(":")).forEach((each) => {
    if (each[0] === town) {
      var rainArray = each[1].split(/,?[a-zA-Z]{3}\s/gm)
      rainArray.shift('')
      rainNumArray = (rainArray.map((each) => Number(each)).reduce((acc, cur) => acc + cur)) / rainArray.length
    }
  })
  if (rainNumArray > 0) {
    return rainNumArray
  }
  else {
    return -1
  }
}
function variance(town, strng) {
    // Your code
  console.log(`this is variance town: ${town}`)
  var rainNumArray
  const getTown = strng.split("\n").map((each) => each.split(":")).forEach((each) => {
    if (each[0] == town) {
      var rainArray = each[1].split(/,?[a-zA-Z]{3}\s/gm)
      rainArray.shift('')
      console.log(rainArray)
      var varArray = rainArray.map((each) => ((each - mean(town, strng)) * (each - mean(town, strng))))
      rainNumArray = (varArray.map((each) => parseFloat(each)).reduce((acc, cur) => acc + cur)) / varArray.length
    }

  } )
  if (rainNumArray > 0) {
    return rainNumArray  
  }
  else {
    return -1
  }
}