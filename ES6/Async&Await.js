// async makes a function return a Promise

// await makes a function wait for a Promise

const names = [
  { fName: "Pranav", lName: "Mendiratta" },
  { fName: "Sam", lName: "Gupta" },
];

function getName() {
  setTimeout(() => {
    let output = "";
    names.forEach((name) => {
      output += `<li>${name.fName} ${name.lName}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createName(name) {
  setTimeout(() => {
    names.push(name);
  }, 2000);
}

createName({ fName: "Ram", lName: "Sharma" }, getName); //used getName as a callback function to make this asynchronous

// Implementing the same using promises

function getName() {
  setTimeout(() => {
    let output = "";
    names.forEach((name) => {
      output += `<li>${name.fName} ${name.lName}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createName(name) {
  let promise = new Promise((resolve, reject) => {
    // New Promise
    setTimeout(() => {
      names.push(name);
    }, 2000);
    const error = false;
    if (!error) {
      resolve("Resolved");
    } else {
      reject("Error");
    }
  });
}

createName({ fName: "Ram", lName: "Sharma" })
  .then(getName)
  .catch((error) => console.log(error));

// Promise.all
const promise1 = new Promise((resolve, reject) => {
  Promise.resolve("resolved");
});
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch("some api key").then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((message) =>
  console.log(message)
);

// Let's do all of this using Async/Await now
async function fetchNames() {
  // asynchronous functions always return a promise
  try {
    const name = await fetch("some api key");

    const data = name.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchNames();
