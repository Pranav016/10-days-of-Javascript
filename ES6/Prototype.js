const user = function (fName, lName){
    this.fName = fName;
    this.lName = lName;
    this.getName = function (){
        console.log(`${fName} ${lName}`);
    }
}

user.prototype.sayHello = function (){ //prototype here helps to add properties to the original function
    console.log("Hello");
}

const f = new user("Pranav", "Mendiratta");
f.getName();
f.sayHello();
