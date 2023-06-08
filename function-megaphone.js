// Megaphone
// Objective
// 1. Create a function that converts a string to uppercase
//
// sample
// megaphone("hellow world") => "HELLOW WORLD"


// 1. Function Declaration
function getMegaphone(message) {
    const outputSound = message.toUpperCase();
    return outputSound;
}

// 2. Function Invocation
const message = getMegaphone("Hey you guys!!!");

// 3. console.log
console.log(message);

// 4. Do it with getWhisper
function getWhisper(message1) {
    const outputSound1 = message1.toLowerCase();
    return outputSound1;

    const message1 = getWhisper("HEY YOU Guys");
    console.log(message1);


}