//?pirveli etapi


const numbers = [
   2,  4,  6,  8, 10, 12, 14,
  16, 18, 20, 22, 24, 26, 28,
  30, 32, 34, 36, 37, 38
];


for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);

if(numbers[i] % 2 !==0){
    break
}
    
};

//? SAEWVO etapi

function maybeError() {
  const maybe = [2, 3, 4, 9, 14, 20];
  const randomIndex = Math.floor(Math.random() * maybe.length);
  if (maybe[randomIndex] % 2 !== 0)
    throw new Error("Oops an Error:)", {
      cause: "ვიცოდით რომ შეიძლებოდა მომხდარიყო",
    });
}



for (let i = 0; i < 3; i++) {
  try {
    const result = maybeError();
    console.log("Result:", result);
  } catch (error) {
    console.log("Error caught:", error.message);
    console.log("Cause:", error.cause);
  }
}


//? mesame (produqtebis dajameba)

const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Shirt", price: 40, category: "clothing" },
  { name: "Shoes", price: 100, category: "clothing" },
  { name: "Watch", price: 200, category: "accessories" },
];


const total = products.reduce((acc, curr) => acc + curr.price, 0);

console.log(`total:`,total);


//?meotxe trow error

function safeDivide(num1, num2) {
  const result = num1 / num2;

  if (isNaN(result)) {
    throw new Error("გაყოფის შედეგი არასწორია!", {
      cause: "მიღებული პარამეტრები არ იყო რიცხვითი მნიშვნელობები",
    });
  }

  return result;
}


try {
  console.log(safeDivide(10, 2)); // 5
  console.log(safeDivide("abc", 2)); // Error
} catch (error) {
  console.log("Error caught:", error.message);
  console.log("Cause:", error.cause);
}
