'use strict';

window.onload = () => {
    document.getElementById('check').addEventListener('click', () => {
        let burger = new Burger('size', 'add', 'topings'); //вызываем класс Burger
        console.log(burger);
        burger.showSum('#price', '#calories');
    })
}

class Param {
    constructor(element) {
        this.name = element.value; // получаем имя элемента
        this.price = +element.dataset['price']; // получаем цену элемента
        this.calories = +element.dataset['calories']; // получаем калории элемента
    }
}

class Burger {
    constructor(size, add, topping) {
        this.size = new Param(this._select(size)); //получаем отмеченный радиобатон size
        this.add = new Param(this._select(add)); //получаем отмеченный радиобатон add
        this.toppings = this._getToppings(topping); //получаем отмеченные чекбоксы topping
    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => {
            let obj = new Param(el);
            result.push(obj); //каждый отмеченный чекбокс пушим в массив
        });
        return result;
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`); //находим радиобатоны
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)]; //возвращаем массив чекбоксов
    }

    _sumPrice() {
        let result = this.size.price + this.add.price;
        this.toppings.forEach(el => result += el.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(el => result += el.calories);
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}

// мой вариант c машинами

window.onload = () => {
    document.getElementById('car-check').addEventListener('click', () => {
        let car = new Car('marka', 'tip', 'complect');
        console.log(car);
        car.showSumDays('#car-price', '#car-days');
    })
}

class Options {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.days = +element.dataset['days'];
    }
}

class Car {
    constructor(marka, tip, complect) {
        this.marka = new Options(this._select(marka));
        this.tip = new Options(this._select(tip));
        this.complect = this._getComplect(complect);
    }

    _getComplect(name) {
        let result = [];
        this._selectAll(name).forEach(el => {
            let obj = new Options(el);
            result.push(obj);
        });
        return result;
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    _sumCarPrice() {
        let result = this.marka.price + this.tip.price;
        this.complect.forEach(el => result += el.price);
        return result;
    }

    _sumCarDays() {
        let result = this.marka.days + this.tip.days;
        this.complect.forEach(el => result += el.days);
        return result;
    }

    showSumDays(price, days) {
        document.querySelector(price).textContent = this._sumCarPrice();
        document.querySelector(days).textContent = this._sumCarDays();
    }
}