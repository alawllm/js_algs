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