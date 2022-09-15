const user = { name: 'Vinod', isAdmin: false };
function displayName(welcomeStr) {
    console.log(typeof welcomeStr);
    console.log(welcomeStr + ' ' +this.name);
}

const employee = {
    getId: function() {
        console.log(this);
        return 'test' + this.name;
    }
}

displayName.call(user, 'hello');
displayName.apply(user, ['hello', 'Hi'])
const empId = employee.getId.bind(user)();
console.log(empId);

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

console.log(detailsOfPerson1());


const curry =(fn) =>{
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
    return fn(...args);
    };
}
const totalNum=(x,y) => {
    return x+y
} 
const curriedTotal = curry(totalNum);
console.log(curriedTotal);
console.log(curriedTotal(10) (20) (30));