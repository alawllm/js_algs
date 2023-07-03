//swapping

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES15 shorter swap

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2] = [arr[idx2], arr[idx1]]]
}

//basic bubble sort
//even if the array is almost sorted, it will iterate again and again

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        //while i goes doen so does j
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//for nearly sorted data
//if we didnt swap the last time, won't swap the next time

function bubbleSortOptimized(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        //while i goes doen so does j
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}