// function charCount(str) {
//     const obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             } else {
//                 obj[char] = 1; 
//             }
//         } return obj
//     }
// }

function charCount(str) {
    const obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1
        }
    } return obj
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric(0-9)
        !(code > 64 && code < 91) && //upper Alpha(A-Z)
        !(code > 96 && code < 123)) { //lower alpha(a-z)
        return false
    }
    return true;
}


//character code
//check if it is a valid character code - boolean comparison
//'hi'.charCodeAt(0)

