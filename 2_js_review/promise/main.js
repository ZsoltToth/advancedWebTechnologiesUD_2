const products = [
    { name : "Apple", price : 5, isTaxable : true},
    { name : "Banana", price : 12, isTaxable : true},
    { name : "Cherry", price : 8, isTaxable : false},
    { name : "Dark Chocolate", price : 23, isTaxable : true},
];

const calculator = require('./GrossPriceCalculator');

calculator.totalGrossPrice_promise(products)
    .then((grossTP)=>{
        console.log("Gross Total Price: %f <----- Promise", grossTP)
    })
    .catch((errorMsg)=>{
        console.log("%s <----------- Promise ERROR", errorMsg);
    });

console.log(calculator.totalGrossPrice_ret(products));

calculator.totalGrossPrice_cb(products,
    (grossTP)=>{
        console.log("Gross Total Price: %f <----- Callback", grossTP)
    },
    (errorMsg)=>{
        console.log("%s <----------- Callback ERROR", errorMsg);
    });


