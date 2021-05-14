(function() {


   // 2 == '2'
   // 2 === '2'
  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    if(num1 < num2) {
      // put code here to run if num1 is greater than num2
      return num2;
    } else {
      // put code here to run if num2 is greater than num1
      return num1;
    }
  };

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree(num1, num2, num3) {
  if(num1 > num3 && num1 > num2) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(char){
  // if(condition) {
  //
  // } else if(condition) {
  //
  // } else {
  //
  // }
  // a, e, i, o, u
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
};

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

var consonant = "bcdfghjklmnpqrstvwxyz";
  srt = "hieeelalaooo"

  function rovarspraket(str) {
    var str  = str.split("")
    var result_str = str.map(element => {
      if(consonant.includes(element)) {
        str = element + "o" + element
        return str
      } else {
        return element
      }
    })
    return result_str.join("")
  }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  var numbers = [1, 4, 5]

  function sum(numbers) {
    numbers.forEach((element, i) => {
      if (i === 0){
      result = element
    } else {
      result += element
      }
    })
  return result
}
function multiply(numbers) {
  var param
  numbers.forEach((element, i) => {
    if (i === 0){
      param = element
    }
    else {
      param *= element
    }
  })
  return param
}


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
var str = 'jag testar'


function reverse(str) {
if ('jag testar')
  return str.split("").reverse().join("");

}


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
var str = ['hello', 'world', 'does', 'anyone', 'knows', 'what', 'time', 'is', 'it']

function findLongestWord(arr) {
  let length = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > length) {
        length = arr[i].length;
    }
   }

   return length;
}


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  var filterLongWords = function(array, int){
    var length = array.length;
    var longestWords = [];
    for (i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }




  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

var charFreq = function(string) {
  var list = {};
  var length = string.length;
  for (var i = 0; i < length; i++) {
    if (string.charAt(i) in list)
      list[string.charAt(i)] += +1;
      else
      list[string.charAt(i)] = 1;
  }
  return list;
}


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();
