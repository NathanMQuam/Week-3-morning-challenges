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

   // const maxLen = str.length/2
   // for(let i = 0; i < maxLen; i++) {
   //    const j = str.length - 1 - i
   //    if( str[ i ] != str[ j ] ) { 
   //       console.log(str[i], '!=', str[j]);
   //       return false
   //    }
   // }
   // return true



   // return str.split('').reverse().join('') == str ? true : false



   return str.split('').every( ( l, i ) => l === str[ str.length - 1 - i ] )
}

let result = '<h2>Is a string a palindrome?</h2>'
tests.forEach(str => {
   result += /*html*/`
   Input: '${str}' returns: <b>${checkPalindrome(str)}</b><br/>
   `
})

wedElem.innerHTML = result