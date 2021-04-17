// Spread
olderArray = [1, 2, 3, 4, 5];
newArray = [...olderArray, 6, 7];
console.log(newArray);

olderObj = {
	Name: "Pranav",
	Age: 21,
};
newObj = {
	...olderObj,
	Age: "soon to be 22",
};
console.log(newObj);

// Rest
function numbers(...args) {
	console.log(args.sort());
}
numbers(newArray);
