class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `Фамилия - ${this._lastName} Имя - ${this._firstName}`;
    }

    greeting() {
        return `Привет я человек и меня зовут ${this._firstName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }
}

class Employee extends Person {
    constructor(inn, number, snils, firstName, lastName, age) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }

    greeting() {
        console.log(`Привет я работник и меня зовут ${this.firstName} ${this.lastName}`);
    }
}

const employee1 = new Employee(1423, 15, 2, "Nurdin", "Bakytbekov", 15);

class Developer extends Employee {
    constructor(inn, number, snils, firstName, lastName, age, level, language) {
        super(inn, number, snils, firstName, lastName, age);
        this._level = level;
        this._language = language;
    }

    greeting() {
        console.log(`Привет я разработчик и я ${this._firstName}`)
    }


    get fullName() {
        return super.fullName;
    }
}

const nurdin = new Developer(15, 15, 12, "Nurdin", "Bakytbekov", 12, 54, "English");
const employee2 = new Employee("12", 2, 3, "Nurles",);
const person = new Person("Nursia", "Nur", 15);

// console.log(nurdin.greeting());
// console.log(employee2.greeting());
// console.log(person.greeting());

const list = [nurdin, employee2, person]

const massGreeting = (persons) => {
    for (let i = 0; i < persons.length;i++){
        const person = persons[i];
        person.greeting()
    }
}
massGreeting(list)