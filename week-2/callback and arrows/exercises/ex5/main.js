const capitalize =(word)=>{
    const letters = word.toLowerCase().split('');
    letters[0] =letters[0].toUpperCase();
    return letters.join('');
}

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia