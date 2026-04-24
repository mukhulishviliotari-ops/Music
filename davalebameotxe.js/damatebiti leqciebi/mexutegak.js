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

const numArr = [2, 5, 8, 10, 77, 132, 23, 98, 44, 32];

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




// gakvetili meshvideeee






const masivi = (["banana", "apple", "kiwi"]);


console.log(masivi[1]);


masivi.push("raimes daamatebs");




masivi.shift("banana")

console.log(masivi);

//unshifti

masivi.unshift("axals amatebs tavshi");


console.log(masivi);

let masivi2 = ["array1", ];
let masivi3 = ["array2", ];


let newmasivi = masivi2.concat(masivi3);

console.log(newmasivi);




let sliceditem = masivi.slice(1, 2);

console.log(sliceditem);

//wevrebis damateba 


masivi.splice(2, 0, "orange");

console.log(masivi);


//davaleba

const student = ["gigi", "qeti", "temo", "gio", "sandro"]

student.splice(4, 0, "oto");
console.log(student);

//masivebshi dzebna


//es metodi mxolod erts daabrunebs anu gayveba da pireli rac shexvdeba imas daabrunebs MARCXNIDAN MARJVNIV

//tu ver ipova daabrunebs -1s

let indexx = student.indexOf("sandro");

console.log(indexx);


//amit vamowmebt tu meramdene indexsia ragac saxeli magalitad 1 aris gio
let sliseditem = student.splice(index, 1);

console.log(sliseditem);



//dzebnis meore metodi

let index2 = student.lastIndexOf("gigi");

console.log(index2);


//gayolebaze itvlis tavisit

let foundItem = student.find ( (value, index, array) => {
  console.log(value, index);
  return value == "sandro";
});

console.log(foundItem);



//meshvide gak 





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

//const arr = [3, 4, 21, 6, 7, 8, 3, 2, 4, 78];

// forEach:
const forEachArr = arr.forEach((value, index, array) => {
  //   console.log(value * 2);
});

// console.log(forEachArr);
// console.log(arr);

// map:
const mappedArr = arr.map((value, index, array) => {
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

const nmArr = [3, 4, 21, 6, 7, 8, 3, 2, 4, 78];

// filter მეთოდი:
const filteredArr = nmArr.filter((value, index, array) => {
  return value % 2 == 0;
});

// console.log(filteredArr);

// every და some:
// ესენი აბრუნებენ true ან false-ს
const everyNumIsEven = filteredArr.every((value, index, array) => {
  return value % 2 == 0;
});

// console.log(everyNumIsEven);

const someExample = nmArr.some((value, index, array) => {
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