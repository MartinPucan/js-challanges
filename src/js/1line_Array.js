// Check if array is empty

const arr1 = [];
const arr2 = [1, 2];
const arr3 = [1, 2];

const isEmpty = array => Array.isArray(array) && array.length === 0 ? console.log(`Array is empty`) : console.log(`Array is not Empty`)

isEmpty(arr1)
isEmpty(arr2)

// Compare two arrays

const compareArray = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2) ? console.log(`Arrays are equal`) : console.log(`Arrays are not equal`)

compareArray(arr1, arr2)
compareArray(arr3, arr2)