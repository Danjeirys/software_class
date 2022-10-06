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

// class Car {
//     constructor (make, model, year, doors, location, price){
//         this.make = make 
//         this.model = model 
//         this.year = year 
//         this.doors = doors 
//         this.location = location 
//         this.price = price
//     }
//     driving () {
//         this.isDriving = true 
//         console.log('This car is driving')
//     }
// }

// let bmw = new Car ('BMW', 'M3', '2016', '4', 'Route 66', '$72,800')
// let nissan = new Car ('Skyline GTR', 'R34', '1999', '2', 'L.A', '$100,000')
// let bugatti = new Car ('Bugatti', 'Chiron', '2022', '2', 'New York City', '$4.3 million')

// console.log(bmw, nissan, bugatti)
// bmw.driving()

// W2D2 classes Homework

class Cat {
    constructor (name, legs, color){
        this.name = name 
        this.legs = legs 
        this.color = color
    }
    purring () {
        this.isPurring = true 
        console.log ('This cat purring')
    }
    sleeping () {
        this.isSleeping = true 
        console.log ('Its sleeping peacefully')
    }
    running () {
        this.isRunning = true 
        console.log ('This cat is running wild')
    }
}

let cat1 = new Cat('Jerry', '4', 'Brown')
let cat2 = new Cat('Tom', '4', 'White')

// console.log(cat1, cat2)
// cat1.sleeping ()
// cat2.running ()



class Pirate {
    constructor (flag, captain, crew) {
        this.pirateFlag = flag 
        this.captain = captain 
        this.crew = crew 
    }
    sailing () {
        this.isSailing = true 
        console.log('The pirates are sailing away from the marines.')
    }
    haki () {
        this.isHaki = true 
        console.log('He was chosen with the kings color, Conquerors Haki!!')
    }
    lauging () {
        this.isLaughing = true 
        console.log('They are laughing on their way to where the One piece is hidden.') 
    }
}

const jollyRoger = [
     new Pirate ("black", 'Luffy', 'Strawhats'),
     new Pirate ('black', 'Whitebeard', 'Whitebeard Pirates'),
     new Pirate ('black', 'Blackbeard', 'Blackbeard Pirates')
]

const blackPearl = [
    new Pirate ('white', 'Gold "D Rogers', 'Legendary Pirate crew'),
    new Pirate ('gray', 'Jack Sparrow', 'The Ghost Ship'),
    new Pirate ('black and red', 'Shanks', 'Red Hair Shanks')
]

function listPirate (array) {
    array.forEach((x) => {
        console.log(x)
    }) 
}

listPirate(jollyRoger)