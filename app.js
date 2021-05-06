"use strict";


/////////////////////////////////////////////////////////////////////
// 19 SPREAD
{
  // slice - копирует массив а не ссылку на него
  // const oldArr = [1, 2, 4]
  // const newArr = oldArr.slice()
  // newArr[2] = "XXXX"
  // console.log(newArr)
  // console.log(oldArr)

  // SPREAD ...
  // const video = ['youtube', 'vimeo', 'rutube'],
  //   blogs = ['wordpress', 'blogger'],
  //   internet = [...video, ...blogs, 'vk', 'facebook'];
  // console.log(internet)
  // internet[0] = 'youXXXbe'
  // console.log(internet)
  // console.log(video)
  // function log(a, b, c, d) {
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)
  //   console.log(d)
  // }

  // const num = [2, 5, 67, 78]
  // log(...num)

  // // SPREAD для объектов
  // const array = ["a", "b"]
  // const newArray = [...array]
  // const q = {
  //   one: 1,
  //   two: 2
  // }
  // // здесь объект создается не по ссылке а индивидуально
  // const newObj = { ...q }
  // console.log(newObj)
  // newObj["one"] = 666
  // console.log(newObj)
  // console.log(q)
  // q['one'] = 6
  // console.log(q)
  // // конец по SPREAD

  // // let a = 5,
  // //   b = a;

  // // b = b + 5

  // // console.log(`${a} - ${b}`)

  // // const obj = {
  // //   a: 5,
  // //   b: 1
  // // }

  // // const copy = obj // передаем ссылку а не объект
  // // copy.a = 66
  // // console.log(copy)
  // // console.log(obj)

}

/////////////////////////////////////////////////////////////////////
// 18 массивы и псевдомассивы
{
  // const arr = [1, 32, 3, 14, 25]
  // // удаляем из конца
  // arr.pop()
  // // вставляем в конец
  // arr.push(10)
  // arr.sort(compareNum)
  // console.log(arr)

  // function compareNum(a, b) {
  //   return a - b
  // }
  //arr[99] = 666
  // console.log(arr)
  // // перебор в массива кроме for можно и fot of
  // for (let val of arr) {
  //   console.log(val)
  // }

  // без break и continue
  // arr.forEach((item, i, arr) => {
  //   console.log(`${item}, ${i}, ${arr}`)
  // })
  // split - из строки в массив

  //const str = prompt("", "")
  // if (str !== null) {
  //   const products = str.split(", ")
  //   // sort - сортируем значения по буквам норм
  //   products.sort()
  //   console.log(typeof products + " - " + products)
  //   // join - из массива в строку
  //   let pr = products.join(';')
  //   console.log(typeof pr + " - " + pr)
  // }



}

/////////////////////////////////////////////////////////////////////
// 17 деструктаризация
// {
//   const options = {
//     name: 'test',
//     width: 1024,
//     height: 700,
//     colors: {
//       border: 'black',
//       bg: 'red'
//     },
//     makeTest() {
//       console.log("TEST")
//     }
//   }
//   // деструктаризация
//   const { border, bg } = options.colors
//   console.log(border)

//   // length в объектак нет
//   console.log(Object.keys(options).length)
//   options.makeTest()
//   // console.log(options.name)
//   // delete options.name
//   // console.log(options)

//   // for of для объекта рабтать не будет
//   // for (let key in options) {
//   //   console.log(`Свойство ${ key } - значение ${ options[key]}`)
//   // }
// }
/////////////////////////////////////////////////////////////////////
// 13 функции
// function firstMess(me) {
//   console.log('Hello')
// }

// firstMess()


// 11 циклы
// let num = 50;
// for (let i = 1; i <= 5; i++) {
//   //if (i === 3) break;
//   if (i === 2) continue;
//   console.log(i)
// }

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55)

// if (4 < 4) {
//   console.log('OK')
// } else if (4 > 50) {
//   console.log('NO')
// } else {
//   console.log('XZ')
// }

// let num = 60;
// (num === 50) ? console.log('ok-num') : console.log('no-num')

// switch (num) {
//   case 20: console.log('20'); break;
//   case 50: console.log('50'); break;
//   case 60: console.log('60'); break;
//   default: case 20: console.log('ХЗ'); break;
// }