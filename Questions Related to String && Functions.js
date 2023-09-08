function toUpperCaseString(inputString) {
    return inputString.toUpperCase();
  }
 
  function countSpaces(sentence) {
    let spaceCount = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        spaceCount++;
      }
    }
    return spaceCount;
  }
  
  function findFirstOccurrence(str, char) {
    return str.indexOf(char);
  }
  
  function trimString(inputString) {
    return inputString.trim();
  }
  
  function replaceApplesWithOranges(inputString) {
    return inputString.replace(/apple/g, 'orange');
  }
  
  function calculateSum(a, b) {
    return a + b;
  }
  
  function countVowels(inputString) {
    const vowelCount = inputString.match(/[aeiou]/gi);
    return vowelCount ? vowelCount.length : 0;
  }
 
  function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
 
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
 
  function capitalizeWordsAlternative(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
  }
 