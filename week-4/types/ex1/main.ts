function sum(arr: number[]): number{
  return arr.reduce((prev,cur)=> prev+cur);
}

function isEven(num: number): boolean{
  return num%2 === 0;
}

const arr1: number[] = [1,2,3,4,5]
const arr2: number[] = [0,0,0,0]
const arr3: number[] = [29933,283,9239]

console.log('sum arr1:', sum(arr1));
console.log(isEven(sum(arr1)));

console.log('sum arr2:', sum(arr2));
console.log(isEven(sum(arr2)));

console.log('sum arr3:', sum(arr3));
console.log(isEven(sum(arr3)));