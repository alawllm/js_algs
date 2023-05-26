function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        //if letter exists, increment otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        //can't find letter or the letter is zero
        //then not an anagram
        //because zero is falsy, if letter:0 it will return false
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
        return true;
    }
}