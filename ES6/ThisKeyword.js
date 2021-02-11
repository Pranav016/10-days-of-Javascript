// This keyword always returns window object/ empty paranthesis in case of regular function calls

console.log(this); //undefined, returns empty paranthesis

const user = {
    firstName : "Pranav",
    lastName : "Mendiratta",
    info : function () {
        console.log(this); //returns the object
        function hello(){ //regular function call
            console.log("Hello");
            console.log(this); //returns global object
        }
        hello();
    },
}

user.info();