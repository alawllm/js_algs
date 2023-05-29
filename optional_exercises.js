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