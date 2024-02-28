class Pizza{
  constructor(name, stuffing, price, calories){
    this.name = name
    this.stuffing = stuffing
    this.price = price
    this.calories = calories
    if (stuffing == "Маленькая"){ this.price += 100; this.calories += 100}
    else {this.price += 200; this.calories += 200}
    this.topping = []

    this.dict = {"сливочная моцарелла Маленькая": "50 20", "сливочная моцарелла Большая": "100 20",
                  "сырный борт Маленькая": "150 50", "сырный борт Большая": "300 50", 
                  "чедер и пармезан Маленькая": "150 50", "чедер и пармезан Большая": "300 50", }
  }
  addTopping(topping) {
    this.topping.push(topping)
    this.price += Number(this.dict[topping +" " + this.stuffing].split(" ")[0])
    this.calories += Number(this.dict[topping +" " + this.stuffing].split(" ")[1])
  }
  removeTopping(topping) {  
    this.topping.splice(this.topping.indexOf(topping), 1)
    this.price -= Number(this.dict[topping +" " + this.stuffing].split(" ")[0])
    this.calories -= Number(this.dict[topping +" " + this.stuffing].split(" ")[1])
  }

  getToppings() {         return this.topping }
  getSize() {             return this.name}
  getStuffing() {         return this.stuffing }
  calculatePrice() {      return this.price }
  calculateCalories() {   return this.calories }
    
}

let pizza = new Pizza("Пепперони", "Маленькая", 800, 400)
console.log(pizza.getStuffing() + " " + pizza.getSize())

function CreatePeperoni(){
  pizza = new Pizza("Пепперони", "Маленькая", 800, 400)
  console.log(pizza.getStuffing() + " " + pizza.getSize())
}

function CreateMargaritta(){
  pizza = new Pizza("Маргарита", "Маленькая", 500, 300)
  console.log(pizza.getStuffing() + " " + pizza.getSize())
}

function CreateBavarsca(){
  pizza = new Pizza("Баварская", "Маленькая", 700, 450)
  console.log(pizza.getStuffing() + " " + pizza.getSize())
}