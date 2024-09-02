// this keyword =>

// this keyword us object ko refer karta hai jo currently active hai, ya jisme abhi code execute ho raha hai.
// Yeh basically us environment ya context ki baat kar raha hota hai jahan se this use kiya ja raha hai.

//  1 => global context may this  => 

// Jab this global scope mein use hota hai, to yeh global object ko refer karta hai.
// Browser mein, global object window hota hai.
console.log(this);  // Browser mein output hoga: window object


// 2 => Object Method mein this:
// Jab this kisi object ke method ke andar use hota hai, to yeh usi object ko refer karta hai.

const person = {
    name: 'Mayank',
    greet: function() {
        console.log(this.name);
    }
};

person.greet();  // Output: Mayank

// 3 => Constructor Function mein this:

// Constructor functions mein this naya object refer karta hai jo us function ke through create hota hai.
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

const emp1 = new Employee('Adnan', 21);
console.log(emp1.name);  // Output: "Adnan"