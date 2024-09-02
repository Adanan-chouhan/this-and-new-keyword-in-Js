// new Keyword => 

// new keyword ka use karke aap JavaScript mein ek naya object create karte hain.
// Yeh keyword ek function (jo constructor function kehlata hai) ko use karta hai aur us function ke through ek naya object banata hai, jisme aap apni marzi se properties aur methods add kar sakte hain.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Mayank', 30);
console.log(person1.name);  // Output: Mayank
console.log(person1.age);   // Output: 30

// Yahaan Person ek constructor function hai.
// new Person('Mayank', 30) likhne par new operator ek naya object (person1) banata hai.
// Person constructor function ke andar this keyword us naye object ko point karta hai, aur uske properties (name aur age) ko set karta hai.
// Isliye person1 object ban kar ready hota hai, jisme name "Mayank" aur age 30 set hota hai.
