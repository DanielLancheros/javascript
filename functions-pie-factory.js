// Pie Factory
// 1. Create a function that makes pies.
// 2. Repeat the string as much as the quantity of the order.
//
// sample
// const result = makepie(10);
// result = 🥧🥧🥧🥧🥧🥧🥧🥧🥧🥧


// 1. Function Declaration
function makePie(quantity=1) {
    const pieOrder = `🥧`.repeat(quantity);
    return pieOrder;
}

// 2. Function invocation
const result = makePie();
console.log(result);