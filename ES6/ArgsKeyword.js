function sum(...args){ //takes any number of unknown arguements
    let sum = 0;
    for (const a of args){
        console.log(a);
        sum += parseInt(a);
    }
    return sum;
}

console.log(sum(1, 2, 3, 4));