    //damrgvaleba
    
    let productPrice = 2299.51;
    

    let round = productPrice.toFixed(0);

    console.log(round);

    //meore etapi
    let finalprice = round.toString() + "₾";

    console.log(finalprice);



    //mesame etapi



    const product = {
    id: 10,
    name: "Laptop",
    category: "Electronics",
    price: null,
};

product.price = finalprice;

console.log(product);


//meotxe etapi

const products = [
    { id: 1, name: "Keyboard", category: "PC Accessories", price: "90₾" },
    { id: 2, name: "Running Shoes", category: "Footwear", price: "85₾" },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: "60₾" },
    { id: 4, name: "Smartphone", category: "Electronics", price: "900₾" },
    { id: 5, name: "Backpack", category: "Accessories", price: "45₾" },
    { id: 6, name: "Desk Chair", category: "Furniture", price: "150₾" },
    { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: "70₾" },
    { id: 8, name: "Wrist Watch", category: "Accessories", price: "200₾" },
    { id: 9, name: "Electric Kettle", category: "Home Appliances", price: "35₾" },
];

products.push(product);

console.log(products);



//mexute etapi


const customers = [
    "Nino", 
    "Giorgi",
    "Mariam", 
    "Luka", 
    "Ana", 
    "Dato", 
    "Saba",
    "unknown"
] 

console.log(customers.includes("unknown"));


//meeqvse etapi

let result = customers.pop("unknown");

console.log("amowrili shedegi:", customers);


//meshvide etapi

console.log(customers[3])

