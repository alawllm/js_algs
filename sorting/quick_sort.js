//sorting elements one by one; array should be mutated
//one element in the right position, bigger / smaller than on the left/ right
//pivot - all items less than moved to the left
//all items bigger than moved to the right

//accept : an array- start index, end index
//grab the pivot from the start of the array
//store the pivot index in a variable
//pivot index - info how many elements less than pivot = how many should be moved
//loop through the array from the start to the end
//swap the starting element

function pivot(arr, start = 0; end = arr.length + 1) {

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    //assuming theat pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            //swap swapIdx with the current i
            swap(arr, swapIdx, i)
        }
    }
    //swapping the first element
    swap(arr, start, swapIdx)

}

//pivot([4,8,2,1,5,7,6,3])
//[1,2,3,4,5,6,7,8]

function quickSort(arr, left = 0; right = arr.length - 1) {
    //looking only at parts of the array
    //we want to stop when there is a subarray 1 element long
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left side constantly changing with every recursive call
        //left and right get closer together as subarrays shorter
        quickSort(arr, left, pivotIndex - 1);
        //right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}