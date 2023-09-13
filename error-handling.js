// 1.

function sum(array) {
let sum = 0;

try {
  // console.log(nonexistentVariable); // To try differernt error which is ReferenceError
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
}

catch (error) {
  if (error instanceof TypeError) {
    console.log(error.message);
  }
  else {
    throw error;
  }
}

return sum;
}


let res = sum(null);
console.log(res);


// 2.
// tests

function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  }
  else {
    throw new TypeError("Invalid name! Must be a string!");
  }
}

try {
    sayName("Alex");
    sayName(1);
}
catch(e) {
    console.log(e.message);
}




// 3.

function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log("Hello World!");
}
