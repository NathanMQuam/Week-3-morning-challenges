let helloWorld = "Hello World!"
let testSentence = "This is a test sentence which should return : 12345678"

const tuesdayOutput = document.getElementById("tuesday")

/**
 * @param {string} sentence
 */
function getLongestWord(sentence) {
   let longestWord = ""

   sentence.split(" ").forEach(word => {
      if(word.length > longestWord.length) {
         longestWord = word
      }
   })

   return longestWord
}

tuesdayOutput.innerHTML +="<p>" + helloWorld + "</p>"
tuesdayOutput.innerHTML +="<p> > " + getLongestWord(helloWorld) + "</p>"
tuesdayOutput.innerHTML +="<p>" + testSentence + "</p>"
tuesdayOutput.innerHTML +="<p> > " + getLongestWord(testSentence) + "</p>"

// console.log(helloWorld, getLongestWord(helloWorld));
// console.log(testSentence, 8);
// console.log(getLongestWord(testSentence));