//accepts a sorted array
//counts the unique values 
//[1,1,1,1,2] - 2
//[5,5,6,7,7,7,8,8,8,9] - 6,9

function countUnique(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}