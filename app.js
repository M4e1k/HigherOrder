
//setInterval(() =>console.log('hi') , 1000) most common higher order functions.

//setTimeout(() =>console.log('hi') , 1000) 
    
const pets = [
    { name: 'Luna', age: 6, type: 'cat' },
    { name: 'Luke', age: 6, type: 'cat' },
    { name: 'Leia', age: 6, type: 'cat' },
    { name: 'Daisy', age: 4, type: 'dog' },
    { name: 'Lilly', age: 1, type: 'dog' },
    { name: 'Noodle', age: 0, type: 'cat' },
    { name: 'Nugget', age: 0, type: 'cat' },
    { name: 'Freddy', age: 2, type: 'fish' },
    { name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
    { name: 'Blake', age: 6 },
    { name: 'Avery', age: 4 },
    { name: 'Riley', age: 1 }
]


//Array Methods

//const names = []
//for (let i = 0; i < pets.length; i++){
  ///  names.push(pets[i].name)
//}

 //const names = 
 //kids.map(x => x.name).forEach(n => console.log(n))
    

// console.log(names)

// pets.forEach(pet => console.log(`my pets name is ${pet.name}. they are ${pet.age} years old`))


const isNotDog = ({type}) => type !== 'dog'
const isBaby = ({age}) => age === 0
const babyPetNotDogName = pets.filter(isNotDog).some(isBaby)?.name
const babyPet = pets.some(pet => pet.age === 0)
//console.log(babyPet)
// const babyPet = pets.find(pet => pet.age === 0)
// console.log(babyPet)
// const babyPet = pets.filter(pet => pet.age === 0)
// console.log(babyPet)


const instructors = [
"Ryan D Appel",
"Brian Foote",
"joe Wetzel"
]

const slugs = instructors.map(i => i.toLowerCase() .replaceAll(' ', '-'))
//console.log (slugs)

const sortedPets = pets.sort((a, b) => {
    // if (a.age === b.age) return 0
    // if (a.age < b.age) return -1
    // return 1
    return a.age < b.age ? -1 :a.age > b.age ? 1 : 0
})
//console.log(sortedPets)

//REDUCE

const sumAges = pets.reduce((x, pet) =>  x + pet.age , 0)
//console.log({sumAges})

const sentence = "hi there! How are you?"

const letterCount = sentence.toLowerCase().split('')
.reduce((contuObj, letter) => {
if (!contuObj[letter]) contuObj[letter] = 1
else contuObj[letter]++
return contuObj
}, { })
console.log(letterCount)


//function currying 

const add = a => b => a + b 
const add3 = add(3)
console.log(add3(4))

const log = prefix => message => console.log(prefix, message)

const elog = logwith("Erichs code")
const jlog = logwith("John s.")

elog("hi")
jlog("what's up")
