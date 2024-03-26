class Wheel {
    drive(){
        console.log(`Колеса едут`);
    }
}

class Engine {
    drive(){
        console.log(`Двигатель работает`);
    }
}

class Freshener {

}

class Car {
    engine:Engine;
    wheels: [];
    freshener:Freshener;

    constructor(freshener) {
        this.freshener = freshener;
        this.engine = new Engine();
        this.wheels.push(new Wheel())
    }

    // Делегирование
    drive(){
        this.engine.drive();
        for(let i = 0;i < this.wheels.length;i++){
            this.wheels[i].drive()
        }
    }
}

const bmw = new Car();
bmw.drive()