function sum(arr) {
    return arr.reduce(function (prev, cur) { return prev + cur; });
}
function isEven(num) {
    return num % 2 === 0;
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [0, 0, 0, 0];
var arr3 = [29933, 283, 9239];
console.log('sum arr1:', sum(arr1));
console.log(isEven(sum(arr1)));
console.log('sum arr2:', sum(arr2));
console.log(isEven(sum(arr2)));
console.log('sum arr3:', sum(arr3));
console.log(isEven(sum(arr3)));
