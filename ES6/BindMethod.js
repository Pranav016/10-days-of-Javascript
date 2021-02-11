const user = {
    fName : "Pranav",
    lName : "Mendiratta",
    getInfo : function(){
        console.log(`
            First name is ${this.fName}
            Last name is ${this.lName}
        `)
    }
}

const person = {
    fName : "Sam",
    lName : "Gupta"
}

var ref = user.getInfo.bind(person); //returns a reference to getInfo function for person object
ref(); //and then we call it

user.getInfo.call(person); //instead of returning reference, calls the method for person object

