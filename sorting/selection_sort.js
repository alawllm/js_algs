//make a var to store the minimum value
//go through and compare it to the next item, update the var if its minimum
//not value but the index is stored
//if the minimum is not the value(index), swap the two values
//start from the next position, shrink the window

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let lowest = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        //swapping
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr
}

selectionSort([24, 33, 10, 18, 3])