class Pizza{
  constructor(name, stuffing){
    this.name = name
    this.stuffing = stuffing

    switch (this.name) {
      case 'Маргарита':
          this.price = 500;
          this.calories = 300;
          break;
      case 'Пепперони':
          this.price = 800;
          this.calories = 400;
          break;
      case 'Баварская':
          this.price = 700;
          this.calories = 450;
          break;
  }
    
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

let pizza = new Pizza("Пепперони", "Маленькая")
console.log(pizza.getStuffing() + " " + pizza.getSize())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())

pizza = new Pizza("Маргарита", "Маленькая")
console.log(pizza.getStuffing() + " " + pizza.getSize())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())
pizza.addTopping("сырный борт")
pizza.addTopping("сливочная моцарелла")
pizza.addTopping("чедер и пармезан")
console.log(pizza.getToppings())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())
pizza.removeTopping("чедер и пармезан")
pizza.removeTopping("сырный борт")
console.log(pizza.getToppings())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())

pizza = new Pizza("Баварская", "Большая")
console.log(pizza.getStuffing() + " " + pizza.getSize())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())
pizza.addTopping("сырный борт")
pizza.addTopping("чедер и пармезан")
pizza.addTopping("сливочная моцарелла")
console.log(pizza.getToppings())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())
pizza.removeTopping("сливочная моцарелла")
pizza.removeTopping("сырный борт")
console.log(pizza.getToppings())
console.log(pizza.calculatePrice() + " " + pizza.calculateCalories())