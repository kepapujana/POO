// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), 
// que muestra por pantalla las propiedades de la persona.

class Person {
    constructor( name, age, genre) {
    this.name = name
    this.age = age
    this.genre = genre
    }
    obtDetails = () => {
        console.log(`Datos personales: ${this.name}, ${this.age}, ${this.genre}`)
    }
        
}    
const newPerson = new Person('Laura', 23, 'Female')
newPerson.obtDetails()


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), 
// que muestre por pantalla el resultado.
class Student extends Person {
constructor(name, age, genre, course, group) {
    super(name, age, genre)
    this.course = course
    this.group = group
    }
    register = () => {
        console.log(`Datos de estudiante: ${this.name}, ${this.age}, ${this.genre}, ${this.course}, ${this.group}`) 
    }
}
const newStudent = new Student('Juanjo', 25, 'male', 'Tercero','A')
newStudent.register()


// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), 
// que muestre por pantalla el resultado.
class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
    super(name, age, genre)
    this.asignatura = asignatura
    this.level = level
    }
    assign = () => {
        console.log(`Datos de profesor: ${this.name}, ${this.age}, ${this.genre}, ${this.asignatura}, ${this.level}`) 
    }
}
const newTeacher = new Teacher('Rosa', 54, 'Female', 'Inglés', 'Advance')
newTeacher.assign()