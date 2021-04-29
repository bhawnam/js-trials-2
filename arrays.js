"use strict";

const items = ['cherry', 'berry', 'apple'];

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

printIndices(items)


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);  
  
}

everyOtherItem(items)


const numbers = [2,4,1000,1]
// 3. smallestNItems
function smallestNItems(items, n) {
  // numbers.sort
  const sortedItems = items.sort((a, b) => a - b);
  console.log(sortedItems);
  const sortedNItems = sortedItems.slice(0,n);
  console.log(sortedNItems.reverse());
}

smallestNItems(numbers, 3)