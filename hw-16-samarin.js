class Peoples {
	constructor(name) {
    this.name = name;
  }
}

class Employees extends Peoples {} // Класс сотрудники

class Customers extends Peoples {} // Класс покупатели


class Operator extends Employees { // Менеджер по работе с клиентами
    getOrder(timeOrderReceipt) {
        this.timeOrderReceipt = timeOrderReceipt;
        console.log(`Заказ получен в ${this.timeOrderReceipt} часов.`);
  }
}
    let operator = new Operator();

class Cook extends Employees { // Повар 
    makingPizza(timeCooking) {
        this.timeCooking = timeCooking;
        console.log(`${this.name} готовит пиццу ${this.timeCooking} минут.`);
  }
}
    let cook = new Cook('Мистер Пануччи');

class Packer extends Employees { // Упаковщик
    packedPizza() {
        console.log('Пицца упакована!');
    }
}
    let packer = new Packer();

class Deliveryman extends Employees { // Курьер
    deliversPizza(deliveryTime) {
        this.deliveryTime = deliveryTime;
        console.log(`${this.name} должен доставить пиццу за ${this.deliveryTime} минут.`);
    }
}
let deliveryman = new Deliveryman('Фрай');

class satisfiedCustomer extends Customers { // Удволетворенный покупатель
    sayHi() {
        console.log('Привет!');
    }

    takePizza() {
        console.log('Спасибо за пиццу!')
    }

    giveCost(tip, cost) {
        this.tip = tip;
        this.cost = cost;
        console.log(`Возьмите ${this.tip} рублей за пиццу и ${this.cost} рублей чаевых.`)
    }
}
let buyer1 = new satisfiedCustomer();


class unsatisfiedCustomer extends Customers { // Неудволетворенный покупатель 
    sayHi() {
        console.log('Привет!');
    }

    takePizza() {
        console.log('Спасибо за пиццу!')
    }

    say() {
        console.log(`Вы доставили пиццу с опозданием, поэтому мы не будем за нее платить.`)
    }
}
let buyer2 = new unsatisfiedCustomer();

operator.getOrder(11);
cook.makingPizza(15);
packer.packedPizza();
deliveryman.deliversPizza(10);
buyer1.sayHi();
buyer1.takePizza();
buyer1.giveCost(500, 50);
buyer2.sayHi();
buyer2.takePizza();
buyer2.say();

