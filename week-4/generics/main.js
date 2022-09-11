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
var sumUp = /** @class */ (function () {
    function sumUp(data) {
        this.arr = data;
    }
    sumUp.prototype.addNumber = function (val) {
        this.arr.push(val);
    };
    sumUp.prototype.checkValue = function (data) {
        var converted = 0;
        if (typeof data === 'number') {
            converted = data;
        }
        else if (typeof data === 'string') {
            var newNum = parseInt(data);
            converted = !isNaN(newNum) ? newNum : 0;
        }
        return converted;
    };
    sumUp.prototype.sum = function () {
        var _this = this;
        var sum = 0;
        this.arr.forEach(function (item) {
            if (typeof item === 'string' || typeof item === 'number') {
                sum += _this.checkValue(item);
            }
        });
        return sum;
    };
    return sumUp;
}());
var numbers1 = new sumUp(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
var numbers2 = new sumUp([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log("1: ".concat(numbers1.sum()));
console.log("2: ".concat(numbers2.sum()));
