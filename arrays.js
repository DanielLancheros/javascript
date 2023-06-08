const students = ['Daniel', 'Jennifer', 'Pat', 'John', 'Max']

console.log(students[2]) // Pat

console.log(students.length) // 5

students.push ("Kevin")
students.unshift("Lorenzo")

console.log(students) // Adds Lorenzo to the beginning and Kevin at the end.

// Let's create an array of objects -- something we will see very commonly

const courses = [
    {title: "Software Engineering", type: "full-time", weeks: 10 },
    {title: "Game Dev", type: "part-time", weeks: 3 },
    {title: "Data Analytics", type: "part-time", weeks: 3},
]
 
console.log(courses[1].title) // Game Dev because of [0,1,2]
