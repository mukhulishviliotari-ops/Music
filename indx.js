
let $price;

let _number = 2;

// console.log($price);

// $price = 30;

// // 30 + 30

// // მიმატების ოპერატორი:
// console.log($price + 30);

// // გამოკლება:
// console.log($price - 30);

// // გამრავლების ოპერატორი:
// console.log($price * 2);

// // გაყოფება:
// console.log($price / 2);

// Modulus (ნაშთის ოპერატორი)
// console.log(5 % 2);
// თუ რიცხვი იყოფა ზუსტად ნაშთის ოპერატორი დაგვიბრუნებს 0 თუ არადა 1-ს.

// რიცხვის ერთით გასასზრდელად გამოიყენება:
// ++
let numberValue = 1;
    numberValue++
// console.log(numberValue);

// რიცსხვის ერთით შემცირებაც ანალოგიურად ხდება უბრალოდ --.
numberValue--
// console.log(numberValue);

//////////////////////////////////////////////////


// მონაცემთა ტიპები:
// 1. number
3;

// 2. string
("Shio");

// 3. boolean

true;
false;

// 4. undefined
let user = undefined;
undefined;

//5.  null
null;

let userName = null;

// Object

const object = {
  // key: value;
    userName: "Shio703",
    age: 100,
    email: null,
};

// ბოლო ორს ჩვენ არ გამოვიყენებთ:
// Symbol
// Symbol("s");

// BigInt
// console.log(BigInt(123));

let student = "ქეთი";

const PI = 3.14;

// Camel Case - დამწერლობა:

// userName
let num = 2;


// undefined-ია სანამ მნიშვნელობას არ მივანიჭებთ!
let price;


// აქ ვანიჭებთ მნიშვნელობას:
price = 20;


// ეს გამოიტანს 20-ს.
// console.log(price);


// console.log(typeof price);
// ეს გამოგვიტანს უკვე მონაცემთა ტიპს, რომელიც იქნება number;


console.log(typeof 5);
// number

console.log(typeof "Title");
// string

console.log(typeof undefined);
// undefined

console.log(typeof null);
// object ეს დააბრუნებს ობიექტს!

console.log(typeof true);
// booleans


//ჯავასკრიპტის "უცნაური" ქცევა: 

// 7 + "3"
console.log(7 + "3");
// სტრინგების გადაბმა: (კონკატენაცია).

// "10" - 2
console.log(10 - 2);





 //gakvetili 3 




let firstName = "Shio";
// აქ ვამატებთ სხვა ინფორმაცია
// დსდასდფფ
// console.log(firstName);

// აქ რასაც მიიღებს ეწოდება პარამეტრი.
function firstFunction(firstName) {
  let scopeVariable = 3;

  // ეს არის scope და აქ აღწერილი/მოთავსებული ინგფორმაცია არ არის გარეთ ხელმისაწვდომი.
  console.log(firstName, scopeVariable);
}

// ამას ვერ გამოვიტანთ იმიტომ რომ არ არის global scope-ზე.
// console.log(scopeVariable)

// აქ რასაც გავატანთ ეწოდება არგუმენტი.
firstFunction("Shio");

// ეს ცარიელი სივრცე არის global scope.

{
  // local scope
  let test = "0";
}
// console.log(test);

// regular function:
function name(params) {}

// arrow function:
const arrowFunction = (a, b) => {
  return (a, b);
  console.log(a + b);
  //   return-ის შემდეგ კოდი აღარ გაეშვება.
};

// ანონიმური ფუნქცია:
() => {};

console.log(arrowFunction(90, 80));

// შექმენით ფუნქცია, რომელიც პარამეტრებად მიიღებს 2 ციფრს და დააბრუნებს მათი გაყოფის შედეგად მიღებულ ნაშთს.

const remainder = (firstNumber, secondNumber) => firstNumber % secondNumber;

console.log("ნაშთი:", remainder(337, 120));

const justFunction = (parameter) => {
  parameter();
};

// ფუნქციას შეგვიძლია არგუმენტად გავატანოთ სხვა ფუნქციაც.
justFunction(() => {
  console.log("I'm Callback function");
});

const secondFunction = (paramFunction, secondParam) => {
  console.log(paramFunction)
};

secondFunction(console.log(), 567890);



//gakvetuli 4  obieqtebi 







function obieqtiFunction(){

}


const obieqti = {
  userName: "shio",
  id: 1,
  address:"tbilisi",
  obieqtiFunction: obieqtiFunction,
};
console.log(obieqti);
// console.log("Object Keys: ", Object.keys(obieqti));

// console.log("Object values: ", Object.values(obieqti));




//pirveli metodi destruqturizaciis

console.log (obieqti.userName);

//meore metodi destruqturizaciis

console.log(obieqti["id"]);

//mesame metodi destruqturizacii


let {address} = obieqti

console.log(address);

const car = {
  brand:"BWM",
  engineType:"V8",
  color:"red",
  isheelleft: true,
  rearDrive: false,
}
console.log(car[`brand`]);
console.log(car[`engineType`]);
console.log(car[`color`]);
console.log(car[`isheelleft`]);
console.log(car[`rearDrive`]);


//amit shegvidzlia shevcvalot funqciis keyebi miuxedavad imisa rom funqcias win cons uweria 

car.color = `blue`;
console.log(car);



///////////////////////////////////

// OOP Object Oriented Programming Language.

//let str = "Test";

//console.log(str.length); //sigrdze

console.log(str.toLowerCase()); //apataravebs

console.log(str.toLocaleUpperCase()); //adidebs teqsts

console.log(str.includes("s")); //tu mocdemuli teqsti sheicavs mocemul asos mashin abrunebs trues tuarada falses


//axali sintaqsi ES JOBIA

//console.log(`this is my text: ${str}`);

//dzveli sintaqsi

//console.log("this is my text:", str );

const myFunction = (value) => {
    `this is return value : ${value}`
}

console.log(myFunction("test"));







//gakvetili 5

