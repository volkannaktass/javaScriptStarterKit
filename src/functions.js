function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi -- urun :  " + productName + " adet : " + quantity)
}


//addToCart()
addToCart(10)
//addToCart("Ananans")


let sayHello = ()=>{
    console.log("hello world!!")
}

sayHello()

let sayHello2 = function (){
    console.log("Hello World 2")

}

sayHello2()


function addToCart2(productName, quantity, unitPrice) {

}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Urun : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)



let product2 = {productName:"Elma"}
let product3 = {productName:"Elma"}

product2= product3
product2.productName = "KARPUZ"
//primitive types -- deger tip sayilar

//objeler arrayler referans type ve obje == dispatchEvent,map


console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}


let products = [
 {productName:"Elma", unitPrice:10, quantity:5},
 {productName:"Armut", unitPrice:10, quantity:5},
 {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)


function add(bisey, ...numbers) { //rest operators ve bunlar son parametre olmali
   let total = 0;
   for (let i = 0; i<numbers.length;i++){
     total = total + numbers[i]
}
  console.log(total)
console.log(bisey)
}

add(20,30)
//add(20,30,40)



let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))











let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"Ic Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"20M"},
    [
      ["Ankara","Sivas"],
      ["Istanbul","Bursa"],
      ["Trabzon","Corum"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})



console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)