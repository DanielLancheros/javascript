// create function that outputs
// Hello is it "name" you're looking for?

// 1. Function Declaration
function sayHello(userName) {
    const sentence = "Hello is it "+userName+" you're looking for?";

    return sentence;
}

// 2. Function Invocation
const result = sayHello("Daniel");

console.log(result);