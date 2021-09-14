function bubbleSort(arr) {
  /**
   * Implement your bubble sort algorithim in this block.
   */

  //  create an array
  arr = [14, 16, 2, 12, 10, 6, 8, 24];

  let swap;
  // do <loop over the length of array> while swap is true
  do
  {
    swap = false;
    for (var i = 0; i < arr.length - 1; i++)
    {
      // check if the preceeding item in index is lesser than the succeeding item in index
      if (arr[i] < arr[i + 1])
      {
        // then hold the value in temp_store
        let temp_store = arr[i];
        arr[i] = arr[i + 1];
        // interchange the items
        arr[i + 1] = temp_store;
        swap = true;
      }
    }
  } while (swap);

  return (arr);
}

