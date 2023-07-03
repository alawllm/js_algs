//pick 2nd element of the array
//compare with the one before
//continue to the next element, if its in incorrect order, iterate through the sorted portion
//place at the correct place, repeat until the array is sorted

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        //working backwards when arr[j] bigger than current val
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 6, 43, 7, 9, 5])