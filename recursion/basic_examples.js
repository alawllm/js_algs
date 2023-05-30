//super simple recursion example

function countDown(num) {
    if (num <= 0) {
        console.log('All done!')
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

//factorial with a for loop
// function factorialEasy(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i
//     }
//     return total;
// }

//recursion factorial - silnia
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}