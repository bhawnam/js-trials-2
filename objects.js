"use strict";

const phrase = 'Hello World World'

// 1. countWords
function countWords(phrase) {
  //split into a list 
  const phrase_list = phrase.split(' ');
  const wordCount = {};

  for (const word of phrase_list) {
    if (wordCount[word]) { 
      wordCount[word] += 1;
    }
    else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

console.log(countWords(phrase));


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  
  if (!melonPrices[price]) { 
    return; 
  }
 return melonPrices[price].sort();

}

console.log(getMelonsAtPrice(3.25));