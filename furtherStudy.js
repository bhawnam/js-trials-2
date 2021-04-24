"use strict";


function wordsInCommon(words1, words2) {
  
  words1 = new Set(words1);
  words2 = new Set(words2);

  const result = new Set();

  for (const word of words1){
    if (words2.has(word)){
      result.add(word);
    }
  }
  return Array.from(result)
}

const words1 = ['Dubai', 'New York']
const words2 = ['San Fran', 'New York']
const commonCities = wordsInCommon(words1, words2)
console.log(commonCities)


function kidsGame(names) {
  const output  = [names.shift()]

  const firstLetterToWords = {}

  for (const name of names){
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]] = [name];
    }

    else {
      firstLetterToWords[name[0]].push(name)
    }
  }  
  //Chain together words


  while (true){
    const startedWord = (output.length) - 1;
    console.log(` This is the starter word ${startedWord}`)
    const len = output[startedWord].length;
    console.log(`This is the length ${len}`)

    const startLetter = output[startedWord].slice(len-1,len);
    console.log(startLetter)

    if (!firstLetterToWords[startLetter] || firstLetterToWords[startLetter] === undefined){  
      break ;
    }

    const word = firstLetterToWords[startLetter].shift();

    console.log(word)
    if (word === undefined){
      break;
    }
    else {
      output.push(word)
    }
  } 
  return output

}

const game = kidsGame(['apple','berry','cherry', 'mango', 'egg', 'gape'])
console.log(game)