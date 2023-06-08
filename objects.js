const student = {
    firstName: "Daniel",
    lastName: "Lancheros",
    age: 33,
    student: true,
}

console.log(student.firstName)

// --lets get a bit more advanced

// Creating an object from seperate variables:

const make = "Mazda"
const model = "CX5"     //variables
const year = 2022

const myCar = {make,model,year} // assembled 3 variables into a single object

// Frequently, we have an object and we want to break it into seperate variables

// *** This is called "destructuring". ***

// we have an object:

const movie = {
    title: "Fight Club",
    year: 1999,
    writer: "Chuck P",
    genre: "Action",
}

// lame way:

//const title = movie.title
//const writer = movie.writer
//const genre = movie.genre

// or we can write it awesome

const {title,writer,genre} = movie

console.log(movie.title) // Fight Club
