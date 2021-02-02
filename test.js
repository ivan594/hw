'use strict'

// const user = {
//     name: 'Ivan',
//     age: 32,
//     isAdmin: true,
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);



// const user = {
//     name: "John"
//   };
//   user.name = "Pete";
//   console.log(user.name);



// let fruit =  "apple";

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// console.log( bag.apple ); // 5, если fruit="apple"


// let user = { name: "John", age: 30 };

// console.log( "age" in user ); // true, user.age существует
// console.log( "blabla" in user ); // false, user.blabla не существует


// let user = {
//     name: "Иван",
//     age: 30
//   };
  
//   let cloneUser = {}; // новый пустой объект
  
//   // скопируем все свойства user в него
//   for (let key in user) {
//     cloneUser[key] = user[key];
//   }
  
//   // теперь в переменной clone находится абсолютно независимый клон объекта
//   cloneUser.name = "Пётр"; // изменим в нём данные

//   console.log( user.name );
//   console.log( cloneUser.name );

// let user = {
//     // ...
//   };
  
//   // сначала объявляем
//   function sayHi() {
//     console.log("Привет!");
//   };
  
//   // затем добавляем в качестве метода
//   user.sayHi = sayHi;
  
//   user.sayHi(); // Привет!

//json

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let json = JSON.stringify(student);
  
//   console.log(typeof json); // мы получили строку!
  
//   console.log(json);




// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup ссылается на room
//   };
  
//   room.occupiedBy = meetup; // room ссылается на meetup
  
//   console.log( JSON.stringify(meetup, ['title', 'participants']) );



// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup ссылается на room
//   };
  
//   room.occupiedBy = meetup; // room ссылается на meetup
  
//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   }));











const tasks = [
	{
    task: 'Помыть кота!',
    author: 'Petya'
  },
	{
    task: 'Купить кота!',
    author: 'Petya'
  },
	{
    task: 'Сделать ДЗ',
    author: 'Ivan'
  }
];

function getTasksByAuthor( TODOArray, author) {

let allTasks = tasks.filter((task) => task.author);

    console.log(allTasks);

    

//   console.log(result);
  getTasksByAuthor(myGreatTODOArray, 'Ivan');
  // возвращает [{ task: 'Сделать ДЗ', author: 'Ivan' }]




    // let result = myGreatTODOArray.filter((arr) => arr.author.match(/'Ivan'/))) { 
        
    //     return author;
        
    // })