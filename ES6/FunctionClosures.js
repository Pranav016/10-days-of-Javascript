function addition(x){
    return function add(y){
        return x+y;
    };
}

console.log(addition(5)(4));

// var addNumbers = addition(5);
// console.log(addNumbers(4));