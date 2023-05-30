//pattern for helper method in recursion
// function outer(input) {

// const outerScopedVariable = []

// function helper(helperInput){
//     //modify the outerScoped variable
//     helper(helperInput--)
// }
// helper(input)
// return outerScopedVariable;
// }


function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

//pure recursion
function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}
