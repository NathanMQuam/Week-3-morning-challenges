const wedElem = document.getElementById("wednesday")

let tests = [
   'Taco cat',
   'Palindrome',
   'racecar',
   'aibohphobia',
   'This string is not a palindrome',
   'saippuakivikauppias',
]

function checkPalindrome(str) {
   str = str.split(' ').join('').toLowerCase()
   const maxLen = str.length/2
   // console.log('checkPalindrome():', str);
   for(let i = 0; i < maxLen; i++) {
      const j = str.length - 1 - i
      //console.log(str[i], ':', str[j]);
      if( str[ i ] != str[ j ] ) { 
         console.log(str[i], '!=', str[j]);
         return false
      }
   }
   // console.log(str, 'is a palindrome!');
   return true
}

let result = '<h2>Is a string a palindrome?</h2>'
tests.forEach(str => {
   result += /*html*/`
   Input: '${str}' returns: <b>${checkPalindrome(str)}</b><br/>
   `
})

wedElem.innerHTML = result