// Check if array is empty

const arr1 = [];
const arr2 = [1, 2];

const isEmpty = array => { Array.isArray(array) && array.length === 0 ? console.log(`Array is empty`) : console.log(`Array is not Empty`) }

isEmpty(arr1)
isEmpty(arr2)