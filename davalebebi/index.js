//!pirveli piroba
const people = [
  { name: "Luka", age: 34 },
  { name: "Mariam", age: 12 },
  { name: "Giorgi", age: 29 },
  { name: "Nino", age: 40 },
  { name: "Davit", age: 18 },
  { name: "Ana", age: 22 },
  { name: "Lasha", age: 10 },
  { name: "Eka", age: 31 },
  { name: "Zviad", age: 25 },
  { name: "Tatia", age: 37 },
  { name: "Saba", age: 14 },
  { name: "Salome", age: 28 },
  { name: "Irakli", age: 11 },
  { name: "Keti", age: 33 },
  { name: "Levan", age: 19 },
  { name: "Tamta", age: 26 },
  { name: "Nikoloz", age: 15 },
  { name: "Elene", age: 39 },
  { name: "Beka", age: 21 },
  { name: "Maiko", age: 30 },
  { name: "Giga", age: 13 },
  { name: "Ia", age: 36 },
  { name: "Vano", age: 24 },
  { name: "Nini", age: 17 },
  { name: "Andria", age: 32 },
  { id: 108 }
];

const filtredyear = people.filter((value, index, array) => {
    return value.age >20 && value.age<=30
});

console.log(filtredyear);

//!meore piroba

const both = people.filter(person => person.id !== undefined && person.name !== undefined);

console.log(both);

//!mesame piroba

const mixedData = [
  { id: 101, name: "Anna" },
  { id: 102, name: null },
  { id: undefined, name: "Charlie" },
  { id: 104, name: "Diana" },
  { id: null, name: undefined },
  { id: 106, name: "Frank" },
  { id: 107, name: undefined },
  { id: undefined, name: "Hannah" },
  { id: 109, name: null },
  { id: 110, name: "Jack" }
];



const Objects = mixedData.filter(item => item.id != null && item.name != null);

console.log(Objects);



const incompleteObjects = mixedData.filter(item => item.id == null || item.name == null);

console.log(incompleteObjects);


//!meotxe piroba 



const myArr = ["Apple", "Banana", "Mango", "Lemon", "Kiwi", "Orange"];
//ამ ობიექტიდან ჩაამატეთ:
const myObj = {
  first: "Watermelon",
  second: "strawberry",
};



function modifiedArray(arr, obj) {

  const slicedArr = arr.slice(0, arr.length - 5).concat(arr.slice(arr.length - 4));

  slicedArr.splice(slicedArr.length, 0, obj.first, obj.second);

  return slicedArr;
}

console.log(modifiedArray(myArr, myObj));


//!mexute piroba


const students = [
  { id: 1, name: "Luka", lastname: "Beridze", grade: 94, isGraduated: null },
  { id: 2, name: "Mariam", lastname: "Kapanadze", grade: 42, isGraduated: null },
  { id: 3, name: "Giorgi", lastname: "Gamsakhurdia", grade: 78, isGraduated: null },
  { id: 4, name: "Nino", lastname: "Mgeladze", grade: 100, isGraduated: null },
  { id: 5, name: "Davit", lastname: "Tsereteli", grade: 35, isGraduated: null },
  { id: 6, name: "Ana", lastname: "Abashidze", grade: 82, isGraduated: null },
  { id: 7, name: "Lasha", lastname: "Tabatadze", grade: 12, isGraduated: null },
  { id: 8, name: "Eka", lastname: "Gorgasali", grade: 65, isGraduated: null },
  { id: 9, name: "Zviad", lastname: "Chikovani", grade: 49, isGraduated: null },
  { id: 10, name: "Tatia", lastname: "Makharadze", grade: 91, isGraduated: null },
  { id: 11, name: "Saba", lastname: "Japaridze", grade: 55, isGraduated: null },
  { id: 12, name: "Salome", lastname: "Bakradze", grade: 28, isGraduated: null },
  { id: 13, name: "Irakli", lastname: "Kvashilava", grade: 88, isGraduated: null },
  { id: 14, name: "Keti", lastname: "Taktakishvili", grade: 73, isGraduated: null },
  { id: 15, name: "Levan", lastname: "Meskhishvili", grade: 47, isGraduated: null },
  { id: 16, name: "Tamta", lastname: "Gogoladze", grade: 61, isGraduated: null },
  { id: 17, name: "Nikoloz", lastname: "Dadiani", grade: 98, isGraduated: null },
  { id: 18, name: "Elene", lastname: "Chavchavadze", grade: 39, isGraduated: null },
  { id: 19, name: "Beka", lastname: "Gelashvili", grade: 84, isGraduated: null },
  { id: 20, name: "Maiko", lastname: "Gegeshidze", grade: 52, isGraduated: null },
  { id: 21, name: "Giga", lastname: "Kurdiani", grade: 31, isGraduated: null },
  { id: 22, name: "Ia", lastname: "Tsintsadze", grade: 77, isGraduated: null },
  { id: 23, name: "Vano", lastname: "Shaorshadze", grade: 45, isGraduated: null },
  { id: 24, name: "Nini", lastname: "Shengelia", grade: 93, isGraduated: null },
  { id: 25, name: "Andria", lastname: "Baratashvili", grade: 68, isGraduated: null }
];



function rateStudents (student){
    return student.map(student => {
        if (student.grade >= 50) {
          student.isGraduated = true;
        }else{
          student.isGraduated = false;
        }
        return student;
    });
  }

const result = rateStudents(students);

console.log("shefasebuli moswavleebis sia:", result);


//!meeqvse etapi

const sortebygrade = students.sort((a , b ) => b.grade - a.grade);

console.log("nishnebis klebadobis mixedvit:", sortebygrade);


//!meshvide etapi


const randomNumbers = [
  15,
  82,
  "System_OK",
  4,
  7,
  56,
  12,
  33,
  105,
  9,
  67,
  "Data_Sync",
  21,
  44,
  76,
  2,
  5,
  140,
  91,
  38,
  "Status_200",
  24,
];

function checknumbers(arr) {
  if (!arr) {
    return "Expected 1 parameter got 0";
  }

  return arr.map(item => {
    const resultObj = {
      data: item,
      isNumber: null,
      isEven: null,
      isUnderHundred: null,
    };


    if (typeof item === "number") {
      resultObj.isNumber = true;


      if (item < 0) {
        console.log("უარყოფითია");
      } else {
        console.log("არ არის უარყოფითი");
      }


      if (item % 2 === 0) {
        resultObj.isEven = true;
      } else {
        resultObj.isEven = false;
      }


      if (item < 100) {
        resultObj.isUnderHundred = true;
      } else {
        resultObj.isUnderHundred = false;
      }

    } else {
      resultObj.isNumber = false;
    }

    return resultObj;
  });
}

console.log(checknumbers(randomNumbers));
