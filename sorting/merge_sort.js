//merging two sorted arrays
//look at the smallest numbers
//[1, 2, 5, 6, 8, 9, 10, 22], [3, 4, 7, 11, 12]

function merge(arr1, arr2) {
    const newArr = []
    let i = 0;
    let j = 0;
    //run until we hit the end in one of them
    while (i < arr1.length && j < arr1.length) {
        if (arr1[i] <= arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
        //pushing the rest 
        while (i < arr1.length) {
            newArr.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            newArr.push(arr[j])
            j++
        }
    }
}
