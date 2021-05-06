'use strict';

console.log('Hello OOP - 20')

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello')
  }
}

// устаревший формат
// const john = {
//   dealth: 100
// }
//join.__proto__ = soldier
///Object.setPrototypeOf(john, soldier)
///console.log(john.armor)

// новый формамт
const john = Object.create(soldier)
john.sayHello()