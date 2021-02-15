// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

// Good thing you can code!

// Create change_count() to return a dollar amount of how much change you have!

/* 
Valid types of change include:
penny: 0.01
nickel: 0.05
dime: 0.10
quarter: 0.25
dollar: 1.00
*/

/* 
Examples:
changeCount('nickel penny dime dollar') == '$1.16'
changeCount('dollar dollar quarter dime dime') == '$2.45'
changeCount('penny') == '$0.01'
changeCount('dime') == '$0.10'
*/

// Remember you have a CHANGE dictionary to work with ;)
function changeCount(change){
    let penny = 0.01
    let nickel = 0.05
    let dime = 0.10
    let quarter = 0.25
    let dollar = 1.00
    let dollars = 0
    let cents = 0
    let changeArr = change.split(' ')

    
    for(let i = 0; i < changeArr.length; i++) {
      if(changeArr[i] == 'penny')
        cents = cents + penny
      if(changeArr[i] == 'nickel')
        cents = cents + nickel
      if(changeArr[i] == 'dime')
        cents = cents + dime
      if(changeArr[i] == 'quarter')
        cents = cents + quarter
      if(changeArr[i] == 'dollar')
        dollars = dollars + dollar
    }
    
    let total = dollars + cents
    let newTotal = total.toFixed(2)
  
    return "$" + newTotal
  }