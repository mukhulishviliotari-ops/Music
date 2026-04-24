//pirveli nawili

const mixed = [1, "hello", 25, "world", 42, true, "JS"];

function checkNumbers(mixed) {
  return mixed.every(function(item) {
    return typeof item === "number";
  });
}
let result = checkNumbers(mixed);

console.log("sheicavs tuara masivshi ricxvs? :", result);



//meore nawili




const fruits = ["apple", "banana", "kiwi", "mango", "pear"];

const lenght = fruits.map(item => item.length);

console.log("wevrebis sigrdzeebi :",lenght)


//mesame nawili


const numbers = [5, 12, 8, 130, 44, 2, 19];

const newArr = numbers.map(function(num) {
  return num * 3;
});

console.log(newArr);

//meotxe etapi

const randomData = [false, 5, "hola", 8, 130, "amigo", 2, 19, true, { message: "კი, ობიექტიც გვაქვს" } ];

const number = randomData.filter(function(item) {
    return typeof item == "number";
})

const string = randomData.filter(function(item) {
    return typeof item == "string";
})

console.log(number);
console.log(string);

//mexute etapi


const products = [
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "Phone", price: 800, category: "electronics" },
    { name: "Shirt", price: 40, category: "clothing" },
    { name: "Shoes", price: 100, category: "clothing" },
    { name: "Watch", price: 200, category: "accessories" }
];


const electronicproducts = products.filter(function(value){
    return value.category == "electronics";
});

console.log(electronicproducts);