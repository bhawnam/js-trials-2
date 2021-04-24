"use strict";

const items = ['cherry', 'berry', 'apple'];

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    // console.log(items[i], [i]);
    console.log(`${items[i]} ${i}`);
  }
}

printIndices(items)


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i])
    }
  }
  console.log(result);  
  
}

everyOtherItem(items)


const numbers = [2,4,1000,1]
// 3. smallestNItems
function smallestNItems(items, n) {
  // numbers.sort
  const sorted_items = items.sort((a, b) => a - b);
  console.log(sorted_items);
  console.log(sorted_items.slice(0,n));
}

smallestNItems(numbers, 3)