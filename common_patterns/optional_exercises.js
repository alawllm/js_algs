//given 2 positive integers find out if the ints have the same number of digits
//time complexity must be O(n)
function sameFrequency(num1, num2) {
    let arr1 = Array.from(String(num1)).sort()
    let arr2 = Array.from(String(num2)).sort()
    if (arr1.length !== arr2.length) {
        return false;
    }
    let counter1 = {}
    let counter2 = {}
    for (let el of arr1) {
        counter1[el] = (counter1[el] || 0) + 1
    }
    for (let el of arr2) {
        counter2[el] = (counter2[el] || 0) + 1
    }
    for (let key in counter1) {
        if (!key in counter2) {
            return false
        } if (counter1[key] !== counter2[key]) {
            return false
        }
    } return true;
}

//variable number of arguments, checks if there are duplicates
//multiple pointers solution
function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

//one liner solution
//are unique values the same length
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

//multiple pointers - given an array and an integer
//determine if there is a pair of numbers equal to the average

function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let sum = (arr[left] + arr[right]) / 2;
        if (sum === avg) {
            return true;
        }
        else if (sum > avg) {
            right--
        } else {
            left++
        }
    }
    return false;
}

//check if string one is included in the str2
//without changing the order

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

//find max sum of a subarray of num length

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}