//basic linear search O(n)

let numbers = [45, 54, 92, 53, 56, 12, 1, 6, 8, 32, 8, 24, 83]

function findNumber(nums, val) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) { return i; }
    }
    return -1
}

//binary search - works only on sorted data
//if the value is too small move the right pointer up
//if its too large move the right pointer down
//else return -1

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    //start <=end - preventing infinite loop
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1
}

binarySearch([2, 5, 6, 8, 9, 11, 13, 15, 16, 18, 21], 15)

//function that takes two strings - larger and the pattern
//loop over the longer and the short string, if the characters don't match break out
//if they match keep going
//if you complete the inner loop and find a match, increment the count
//return the count

let str = 'hahalolomglol'
let pattern = 'lol'

function naiveSearch(str, pattern) {
    const count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i + j]) break;
            if (j === pattern.length - 1) count++
        }
    }
    return count;
}


