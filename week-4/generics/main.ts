//ex1

/* function sum<Type>(data: Type): number{
    let sum:number=0;
    if(Array.isArray(data)){
        data.forEach(item =>{
            sum += checkValue(item);
        })
    }else if(typeof data === 'string' || typeof data === 'number'){
        sum = checkValue(data);
    }
    return sum;
}

function checkValue(data: string|number): number{
    let converted:number = 0;
if(typeof data === 'number'){
    converted = data;
}else if(typeof data === 'string'){
    let newNum: number= parseInt(data);
    converted = !isNaN(newNum) ? newNum : 0;
}
return converted;
}

console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
 */


//ex2

class sumUp<Type>{

     arr: Type[];

    constructor(data: Type[]){
        this.arr = data;
    }
    
    addNumber(val: Type){
        this.arr.push(val);
    }

    checkValue(data: string|number): number{
        let converted:number = 0;
    if(typeof data === 'number'){
        converted = data;
    }else if(typeof data === 'string'){
        let newNum: number= parseInt(data);
        converted = !isNaN(newNum) ? newNum : 0;
    }
    return converted;
    }

    sum(): number{
        let sum:number=0;
            this.arr.forEach(item =>{
                if(typeof item === 'string' || typeof item === 'number'){
                sum += this.checkValue(item);
                }
            })
        return sum;
    }
    }


const numbers1: sumUp<string> = new sumUp<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: sumUp<number> = new sumUp<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);