//not a comparison algorithm
//integer sort, placing integers into 'buckets'

//function for placing the digits into the 'buckets'
//return the digit in num at the given place value
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

//figuring out how many digits there are in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//mostDigits - given an array of numbers, returns the number of digits
//in the largest numbers in the list

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
}

//RADIX SORT
//define a function that accepts an array
//figure out which number has the most digits
//loop from k=0 up to the largest number of digits
//for each iteration:
//create buckets for each digit(0 to 9)
//place each number in a bucket based on its kth digit
//replace our existing array with the numbers in buckets
//return list at the end!

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    //loop up to the most number of digits
    for (let k = 0; k < maxDigitCount; k++) {
        //array of 10 empty arrays
        let digitBuckets = Array.from({ length: 10 }, () => [])
        //loop over every number
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        //spread - pass in every argument as separate argument instead of the whole array
        nums = [].concat(...digitBuckets)
    }
    return nums;
}