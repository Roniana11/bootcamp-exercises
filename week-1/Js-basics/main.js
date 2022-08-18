let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase > 4){
        console.log("Whould you like to upgrade?");
    }else{
        console.log("are you setisfied?");
    }
}else if(!isUSCitizen && boughtTesla){
    console.log("Would you like to move to us?")
}else{
    console.log("Would you like to buy a tesla?")
}

////////////////////////

const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(1,2);
numbers[3] = 1;
numbers.splice(-4);
numbers.unshift(0);
console.log(numbers);


const p1={name:"zvi", age:50, city:"tel aviv"}
const p2={name:"avi", age:30, city:"tel aviv"}

if(p1.age === p2.age && p1.city === p2.city){
    console.log("Jill wanted to date Robert");
}else if(p1.city !== p2.city){
    console.log("Jill wanted to date Robert, but couldn’t")
}