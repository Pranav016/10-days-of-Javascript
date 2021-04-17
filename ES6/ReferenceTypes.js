olderArray = [1, 2, 3, 4, 5];
newArray = olderArray;
console.log(newArray);
olderArray[1] = 10;
console.log(newArray);

olderObj = {
	Name: "Pranav",
	Age: 21,
};
newObj = olderObj;
console.log(newObj);
olderObj.Name = "Max";
console.log(newObj);
olderObj.Name = "Pranav";
newObj = { ...newObj }; // correct way of referencing
olderObj.Name = "Max";
console.log(newObj);
