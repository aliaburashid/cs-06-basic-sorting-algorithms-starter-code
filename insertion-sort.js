function insertionSort (items) {
  // Loop through each element
  // store the current item value so it can be placed correctly
  // in the sorted portion of the array
  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with
  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)
  // We can now insert the item in its sorted location
  // Remember to return the list!

  // code here

   // Loop through each element starting from index 1 (index 0 is already "sorted")
   for (let i = 1; i < items.length; i++) {
    let value = items[i]
    let j = i-1

    // Loop backward through the sorted portion of the array
    // Shift elements over until we find the right place for value
    while (j >= 0 && items[j] > value) {
      items[j + 1] = items[j]; // move element one slot to the right
      j--;
    }

    // We can now insert the item in its sorted location
    items[j + 1] = value;
  }
  // Return the sorted array
  return items;
}

module.exports = insertionSort;
