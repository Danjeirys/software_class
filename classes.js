// Classes are blueprints for objects

// const lion = {
//     legs: 4,
//     color: 'golden',
//     diet: 'Carnivores'
// }

// const zebra = {
//     legs: 4,
//     color: 'black and white',
//     diet: 'Herbivores'
// }

// Class is a reserved JS keyword
// Classes always start with a capital letter(the label)

// class Animal  {
    // use the constructor method
    // constructor(name, legs, color, diet) {
        // create the keys for each new object
    //     this.name = name
    //     this.legs = legs
    //     this.color = color
    //     this.diet = diet
    // }
    // This is a METHOD in our constructor
//     bathing() {
//         this.isBathing = true
//         console.log('Animal is bathing')
//     }
// }

// let lion = new Animal ('Lion', '4', 'Golden', 'Carnivore')
// let zebra = new Animal ('Zebra', '4', 'Black and White', 'Herbivores')

// console.log(lion, zebra)

// let elephants = new Animal ('elephants', '4', 'Gray', 'Herbivores')
// console.log(elephants)
// elephants.bathing()

class Car {
    constructor (make, model, year, doors, location, price){
        this.make = make 
        this.model = model 
        this.year = year 
        this.doors = doors 
        this.location = location 
        this.price = price
    }
    driving () {
        this.isDriving = true 
        console.log('This car is driving')
    }
}

let bmw = new Car ('BMW', 'M3', '2016', '4', 'Route 66', '$72,800')
let nissan = new Car ('Skyline GTR', 'R34', '1999', '2', 'L.A', '$100,000')
let bugatti = new Car ('Bugatti', 'Chiron', '2022', '2', 'New York City', '$4.3 million')

console.log(bmw, nissan, bugatti)
bmw.driving()