"use strict";

const phrase = 'Hello World World'

// 1. countWords
function countWords(phrase) {
  //split into a list 
  const phrase_list = phrase.split(' ');
  const countDict = {};
  for (const word of phrase_list) {
    if (countDict[word]) { 
      countDict[word] += 1;
    }
    else {
      countDict[word] = 1;
    }
  }

  return countDict;
}

const testDict = countWords(phrase)

console.log(testDict)


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  if (!melonPrices[price]) { 
    return 
  }
  else {
    return melonPrices[price].sort();
  }
}

const melonDict = getMelonsAtPrice(3.25)
console.log(melonDict)