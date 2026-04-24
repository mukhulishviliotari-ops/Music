const str = "just test string";
console.log(str.toUpperCase());

//atvlas iwyebs 1idan

console.log(str[1]);

console.log(str.at(3));

console.log(str.slice(0, 3));
console.log(str.slice(5, 10));



console.log(str.slice(0, ));

console.log(str.substring(/*aq 0 igulisxmeba */));

const stringWithEmptySpaces = " test String   ";

const clearedString = stringWithEmptySpaces.trim();

console.log(`Cleared Text: ${clearedString}`);

const index = str.indexOf("t");

//console.log(index);

console.log(str.match("test"));

const email = "example@gmail.com";

console.log(email.includes("@")); //esec boolean

console.log(email.startsWith("ex", 4)); //boolean amowmebs mititebul teqsts //4 ro davuwert eseigi veybnebit ro atvla daiwyos 4 idan


//replace

//console.log(email.replace("@", "a"))

//let modifiedSTR = email.replaceAll("m" , "+");

//console.log(modifiedSTR);


let modifiedSTR = email.replaceAll ("m", "*");

let num = 2;

let num2 = num.toString();

let padText = num2.padStart(3, "0");

let testNum = 14.95;

let toStringNum = testNum.toString() + "₾";

console.log(testNum.toString());

console.log(typeof toStringNum);

//console.log(toStringNum);






//gakvetili meeqvsseee




const obj = {
  id: 1,
  name: "Laptop",
  price: 3000,
  color: "Black",
  architecture: "x64",
};

obj.price = 2000;

// console.log("Object Example:", obj);

// Array:

const myArray = [2, 5, 8, 10, 77, 132];
// console.log(myArray.length);

// console.log(myArray[0]);

// console.log(myArray[5]);

// ეს ორივე დააბრუნებს undefined-ს:
// console.log(myArray[6]);
let justVar;
// console.log(justVar);

// console.log("Array Example:", myArray)

// მასივის მონაცემთა ტიპი არის object
// console.log(typeof []);

const arr = [2, 5, 8, 10, 77, 132];

arr[0] = "text";
// console.log(arr);

const nirr = "test string";

let changed = (nirr[0] = 2);
// console.log(str);

const anotherObj = {
  classroom: "CodeIT",
  id: 1,
  students: ["Gigi", "Qeti", "Temo", "Gio", "Sandro"],
};

// console.log(anotherObj.students[2]);

// მოცემული მასივიდან გამოიტანეთ პირველი პროდუქტის მახასიათებლები:
// gpu, ram და მეხსიერების ზომა.
const complexProducts = [
  {
    productId: 301,
    metadata: {
      info: {
        title: "Gaming Laptop",
        specs: {
          cpu: "Intel i9",
          gpu: "NVIDIA RTX 3080",
          ram: "32GB",
          storage: {
            type: "SSD",
            size: "1TB",
          },
        },
        prices: {
          usd: 2500,
          eur: 2300,
          gbp: 2100,
        },
      },
      reviews: [
        {
          reviewer: "Alice",
          rating: 5,
          comments: [
            {
              id: 401,
              text: "Excellent performance!",
              timestamp: "2024-05-25T12:00:00Z",
            },
            {
              id: 402,
              text: "A bit expensive but worth it.",
              timestamp: "2024-05-26T15:00:00Z",
            },
          ],
        },
        {
          reviewer: "Bob",
          rating: 4,
          comments: [
            {
              id: 403,
              text: "Great graphics!",
              timestamp: "2024-05-27T18:00:00Z",
            },
            {
              id: 404,
              text: "Battery life could be better.",
              timestamp: "2024-05-28T20:00:00Z",
            },
          ],
        },
      ],
    },
  },
  {
    productId: 302,
    metadata: {
      info: {
        title: "Smartwatch",
        specs: {
          cpu: "Dual-Core",
          ram: "1GB",
          storage: {
            type: "Flash",
            size: "32GB",
          },
        },
        prices: {
          usd: 300,
          eur: 280,
          gbp: 260,
        },
      },
      reviews: [
        {
          reviewer: "Charlie",
          rating: 4,
          comments: [
            {
              id: 405,
              text: "Very convenient and stylish.",
              timestamp: "2024-05-20T10:00:00Z",
            },
            {
              id: 406,
              text: "Needs more apps.",
              timestamp: "2024-05-21T14:00:00Z",
            },
          ],
        },
        {
          reviewer: "Dana",
          rating: 5,
          comments: [
            {
              id: 407,
              text: "Excellent battery life!",
              timestamp: "2024-05-22T16:00:00Z",
            },
            {
              id: 408,
              text: "Love the fitness tracking features.",
              timestamp: "2024-05-23T18:00:00Z",
            },
          ],
        },
      ],
    },
  },
];

// console.log(complexProducts[0].metadata.info.specs.gpu);
// console.log(complexProducts[0].metadata.info.specs.ram);
// console.log(complexProducts[0].metadata.info.specs.storage.size);

const metadata = {
  info: {
    specs: {
      ram: 16,
      gpu: "RTX 5070",
      storage: {
        size: 512,
      },
    },
  },
};

// მასივის მეთოდები:
const fruits = ["apple", "magno", "banana", "lemon"];

const numAr = [2, 5, 8, 10, 77, 132, 23, 98, 44, 32];

// console.log(fruits.toString());

// console.log(fruits.at(1));

// მეთოდი რომელიც ცვლის ორიგინალ მასივს:

// pop ცვლის ორიგინალ მასივს!
// fruits.pop();
// console.log(fruits);

// push ბოლოში დაამატებს ახალ წევრს:

fruits.push("Kiwi");
// console.log(fruits);


// join მეთოდი გაართიანებს მასივის ყველა წევრს ერთ სტრიქონში.
let joinedArrays = fruits.join(" ");
console.log(joinedArrays);









// merve gakvetilii



// returns 6
// console.log(students1.length);

// (value)=>{}

// const myFunction = (value, index, array) => {
//     console.log(value, index, array);
// }

// myFunction(students1[0], 0, students1);
// myFunction(students1[1], 1,students1);

const students1 = ["gigi", "qeti", "temo", "gio", "sandro", "shio"];

// students1.forEach(myFunction);

// students1.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

const raa = [3, 4, 21, 6, 7, 8, 3, 2, 4, 78];

// forEach:
const forEachArr = raa.forEach((value, index, array) => {
  //   console.log(value * 2);
});

// console.log(forEachArr);
// console.log(arr);

// map:
const mappedArr = raa.map((value, index, array) => {
  return value * 2;
});

// console.log(mappedArr)

// დავალება:
const names = ["gigi", "qeti", "temo", "gio", "sandro", "shio"];

// დამეპეთ მოცემული მასივი და თიოთოული სახელი გახადეთ upperCase.

const func = () => {
  return "returned value";
};

// let result = func();

// console.log(result);

// find მეთოდი:
// let foundItem = students1.find((value, index, array) => {
//     console.log(value, index);
//     return value == "Shio";
//  });

// console.log(foundItem);

const numArr = [3, 4, 21, 6, 7, 8, 3, 2, 4, 78];

// filter მეთოდი:
const filteredArr = numArr.filter((value, index, array) => {
  return value % 2 == 0;
});

//console.log(filteredArr);

// every და some:
// ესენი აბრუნებენ true ან false-ს
const everyNumIsEven = filteredArr.every((value, index, array) => {
  return value % 2 == 0;
});

// console.log(everyNumIsEven);

const someExample = numArr.some((value, index, array) => {
    return value > 21;
});

// console.log(someExample);


const negativeNumbers = [3, 4, 21, -6, 7, 8, -3, 2, 4, 78];
// ეს დააბრუნებს false-ს იმიტომ რომ ყველა წევრი არ არის დადებითი რიცხვი.
const isEveryNumPositive = negativeNumbers.every((value, index, array) => {
    return value > 0;
});
console.log(isEveryNumPositive);


const positiveNumbers = [3, 4, 21, 6, 7, 8, 3, 2, 4, 78];

// ეს დააბრუნებს true-ს იმიტომ რომ ყველა წევრია მეტია 0-ზე.
const isEveryNumPositive2 = positiveNumbers.every((value, index, array) => {
  return value > 0;
});
console.log(isEveryNumPositive2);



//mecxre gakvetilii


//sortireba

const sortirebismasivi =["apple", "magno", "cocunot", "banana", "lemon", "kiwi"];


sortirebismasivi.sort();//anbanis mixedvit alagebs
sortirebismasivi.reverse();//abrunebs atrialebs masivis mimdevrobas

console.log(sortirebismasivi);



const masivi = [2, 6, 3, 4, 6, 2, 1, 5, 8, 2, 6, 20, 938];

const UpToTen = [12, 256, 124, 68, 145, 561];

//masivi.sort(); //daalagebs zrdis mixedvit
//UpToTen.sort();//sheidzleba atamde sheeshalos anu wina ricxvit kitxulobs


masivi.sort((a, b)=> {//es ufro kargad mushaobs yvelaze kargad alagebs
    return a - b;
});
masivi.sort((a, b)=> {
    return b - a;//es daalagebs klebis mixedvit
});
//console.log(masivi, UpToTen);

console.log(masivi);


//davaleba
const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Shirt", price: 40, category: "clothing" },
  { name: "Shoes", price: 100, category: "clothing" },
  { name: "Watch", price: 200, category: "accessories" }
];



products.sort((a, b)=> {
  return a.price - b.price;
});



console.log(products);



//shemdegi tema

//booleanebi

const user = {
  username: "oto",
  age:16,
  isAdmin:true,
  isActive:false,
};

console.log(10>5);
console.log(user.age >= 18);
console.log(10>=10);


//tolobis operatori

console.log(18 == 18);
console.log(18 =="18");//ar amowmebs typofs

console.log(18 === "18");//mkacri tolobis operatori


//if da elsebi


if( 18==="18"){
  console.log("18s ar udris");
}else{
  console.log("udris 18s")
}



if( user.age >= 18) {
  console.log("shen warmatebit daregistrirdi");
  
}else {
  console.log("ver daregistrirdi")
}


//* !, &&, !! 

let myVars = false;

console.log(!myVars);//* ! es cods mtlianad kods tu falsia mashin trues gamoitans

//* && operatori

const myFunc = (obj) => {

  if(!obj){
    console.log("momxmareblis onbieqti ar aris!");
    return;
  }


  if(obj && user.username){
    console.log("momxmarebeli adamiania");
  }else{
    console.log("standartuli momxmarebeli");
  }

  if (obj.age === 16 || obj.isAdmin) {
    console.log("ერთ-ერთი მაინც ჭეშმარიტია და გაეშვება!");
  }else{
    console.log("vax");
  }
};


myFunc();



// thruthy data types:
// number, object, string, true

if(7) console.log("aqedan iwyeba:",7);
if(true) console.log(true);
if(" ") console.log("string with even one space");
if({}) console.log({});


// falsy data types:
undefined, null, false, ""

if(undefined) console.log(undefined);
if(0) console.log(0);
if(-0) console.log(-0);
if("") console.log("emty strings");
if(false) console.log(false);
if(NaN) console.log(NaN);
if(null) console.log(null);


//! meate gakvetili



// // thruthy data types:
// // number, object, string, true

// if (7) console.log(7);
// if (true) console.log(true);
// if (" ") console.log("string with even one space");
// if ({}) console.log({});

// // falsy data types:
// (undefined, null, false, "");

// if (undefined) console.log(undefined);
// if (0) console.log(0);
// if (-0) console.log(-0);
// if ("") console.log("emty strings");
// if (false) console.log(false);
// if (NaN) console.log(NaN);
// if (null) console.log(null);

const myFunction = (param) => {
  if (!param) {
    return "საჭირო ინფორმაცია არ არის!";
  } else {
    console.log("ინფორმაციის დამუშავება...");
  }

};

console.log(myFunction());

// if/else vs switch:
let number = 150;

if (typeof number === "number") {

    console.log("მიღებული მონაცემი რიცხვია!");

} else if (number > 10 && number < 200) {

    console.log("რიცხვი მისაღებია!");

} else {
  console.log("ციფრი არ არის!");
}


//*switch

let usersRole = "user";

switch (usersRole) {
  case "admin":
    console.log("ადმინია!");
    break;

  case "user":
    console.log("მომხმარებელია!");
    break;

  default:
    console.log("მომხმარებელი არ არის!");
    break;
}

//? loop
//!es sheileba gamoviyenot masivebshi interaciaze




for(let i = 1; i < 10; i++){

  //gaacherebs loops
  if(i===10) break;

  //gamotovebs am cifrs
  if(i===7) continue;
      console.log(i);
}
const mixedData = [
  { id: 101, name: "Alice" },
  { id: 102, name: null },
  { id: undefined, name: "Charlie" },
  { id: 104, name: "Diana" },
  { id: null, name: undefined },
  { id: 106, name: "Frank" },
  { id: 107, name: "" },
  { id: undefined, name: "Hannah" },
  { id: 109, name: null },
  { id: 110, name: "Jack" },
];

for (let i = 0; i < mixedData.length; i++) {

  if (mixedData[i].id === undefined) {
    console.log(mixedData[i]);
    break;
  }
//   console.log(mixedData[i]);
}

//!metertmete gakvetili

//? for in da for

const myArr = ["Apple", "Banana", "Mango", "Lemon", "Kiwi", "Orange"];


// for (let index = myArr.length - 1; index > 0; index--) {
//   console.log(myArr[index]);
// }

//? for of ლუპი:

// for(let item of myArr ) {

//     console.log(item)

// }

const userObj = {
  userName: "Shio",
  age: 20,
  isAdmin: true,
  isActive: false,
};


//? for in ლუპი:

// for(let item in userObj ) {

//     console.log(item, userObj[item]   );

// }

//? while

//let i = 0


//while( i<10) {
  //console.log(i)
//}



const divider = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {

    throw new Error("მიღებული ციფრი უდრის ნულს!", {cause: "num1 ან num2 უდრის 0-ს"});

  }




  return num1 / num2;
};

//console.log(divider(20, 0));




try{
console.log("დასაწყისი");

  throw new Error("მოხდა ხარვეზი!");

}catch(error){

    console.log(error.message);
}

console.log("იწყება დამუშავება...");


const divider2 = (num1, num2) => {

try{

 if(isNaN(num1 / num2)) throw new Error("მიღებული პარამეტრები არ არის რიცხვითი მნიშვნელობის!");

}catch(error){

console.log(error.message);
}

};

divider2("", "");

console.log("done!")


let numm = 3

let strr = "";

num.toString();

// TypeError:
// strr.map((v, i, a)=> console.log(v));


// ReferenceError:
// console.log(a)

// RangeError:
// new Array(-1);


//! shemdegi tema date

//? metertmete gakvetil



const oldDate = new Date("03/25/2015");


const date = new Date();

//console.log("წელი:", date.getFullYear());

//console.log("თვე:", date.getMonth());

//console.log("დღე:", date.getDay());

//console.log("wamebi:", date.getSeconds());


//const todaysdate = new Date().getMonth();

const months = [
"January", 
"February", 
"March",
"April", 
"May",
"June",
"July",
"August", 
"September", 
"October",
"November", 
"December",
]


//console.log("hello today is:", months[todaysdate]);


const dateee = new Date();

const weekDayIndex = date.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


//console.log("dges aris:", [weekDayIndex]);



/////////////////////////?

//?math object


console.log(Math.PI) 
//console.log(Math.PI.toPrecision(30));


const idk = 3.14;

const idk2 = 2.60;

const idk3 = 2.9;


let roundedToFloor = Math.floor(idk);

let roundedToFloor2 = Math.floor(idk2);

let roundedToFloor3 = Math.floor(idk3);


//?*ceil()
console.log("/////////////////")

let roundedToCeil = Math.ceil(idk2);



const idk4= 3.1;

let roundedToCeil2 = Math.ceil(idk4);

console.log(roundedToCeil, roundedToCeil2);


//* rounded()


let n1 = 3.51;

let n2 = 3.3;

const rounded71 = Math.round(n1);

const rounded72 = Math.round(n2);

//console.log(rounded71, rounded72);



//!mxolod erti rom gamoitanos iseti console.log trunc
//console.log(Math.trunc(n1));


console.log("xarisxebi:",Math.pow(5, 3));


const randomNumber12 = Math.floor( Math.random() * 100);


console.log(randomNumber12);


const arr199 = ["paper", "rock", "scissor", ]

const randomNumber16 = Math.floor( Math.random() * arr199.length);

console.log(randomNumber16);

console.log(arr199[randomNumber16]);


const numArr192 = [1, 4, 7, 3, 1, 3, 1022345678537874,]

const lowestnumber = Math.min(...numArr192);

const hightestnumber = Math.max(...numArr192);

console.log(lowestnumber, hightestnumber);




//!json

'{"name":"John", "age":30, "car":null}'

const user = { name: "John", age: "30", car: null };


// user.age

const toJS = JSON.parse('{"name":"John", "age":30, "car":null}');

console.log(toJS.age)


const toJSON = JSON.stringify(user);
console.log(toJSON);