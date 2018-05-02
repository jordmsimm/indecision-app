//arguments object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions

const add = (a,b) =>{
    //console.log(arguments)
    return a + b;
}
console.log(add(5,1))

const user = {
    name:'Jordan',
    cities:['Hunst','Florence','Nash'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in '+ city)
    }

    
}
//console.log(user.printPlacesLived());

const multiplier = {
    numbers:[5,7,3],
    multiplier:2,
    multiply(){
        return this.numbers.map((num) => this.multiplier * num)
    }
}
console.log(multiplier.multiply())