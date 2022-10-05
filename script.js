// Objects are key value pairs


// const car = {
//     make: 'BMW', 
//     model: 'M3',
//     color: 'Black',
//     year: '2026',
//     drive: () => {
//         console.log(`the ${car.make} is driving`)
//     }
// }

// console.log(car)
// to access data in an object, we use dot notation

// console.log(car.make)

// car.doors = '2'

// console.log (car)

// car.color = 'white' // can change the key value on da fly
// console.log (car)


// delete car.color  // deletes the whole key with value
// console.log (car)

// car.drive()

const carOne = {
    make: 'BMW', 
    model: 'M3',
    color: 'Black',
    year: '2026',
    drive: function ()  {
        console.log('the ' + this.make + ' is driving' )
        
    },
    owners: ['Bob', 'Sally', 'Sue']
}

// carOne.drive ()

console.log(carOne.owners[1])

