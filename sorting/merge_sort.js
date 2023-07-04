//merging two sorted arrays
//look at the smallest numbers
//[1, 2, 5, 6, 8, 9, 10, 22], [3, 4, 7, 11, 12]
//bigO time complexity O(nlog n)

function merge(arr1, arr2) {
    //pushing short arrays into a new arrays
    const newArr = []
    let i = 0;
    let j = 0;
    //run until we hit the end in one of them
    while (i < arr1.length && j < arr1.length) {
        //sorting
        if (arr1[i] <= arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
        //pushing the rest of the array
        while (i < arr1.length) {
            newArr.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            newArr.push(arr[j])
            j++
        }
    }
}

//merge sort
//[10, 24,73,76]
//[10,24] [73,76]
//[10] [24]



function mergeSort(arr) {
    //if arr shorter or equal one, will be returned
    if (arr.length <= 1) return arr;

    //array must be sliced in half
    //new midpoint calculated
    let mid = Math.floor(arr.length / 2);

    //calling mergeSort again
    //first it checks the left side
    let left = mergeSort(arr.slice(0, mid));
    //calling merge sort again
    //after the left side, the right side is checked
    let right = mergeSort(arr.slice(mid));
    //returns and calls merge function which merges the arrays
    return merge(left, right);
}
