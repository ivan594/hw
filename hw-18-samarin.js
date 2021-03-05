const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const countPeople = Math.floor(Math.random() + 2);
  
      ( countPeople <= 2 ) 
      ? resolve('Все получилось!') 
      : reject('Не получилоь'); }, 1000);
  });

myFirstPromise
  .then( (result) => { console.log(result) } )


const mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const countCat = Math.floor(Math.random() * 2);
  
      ( countCat % 2 == 2 ) 
      ? resolve('Получилось!') 
      : reject('Получилось не до конца...'); }, 1000);
  });

  mySecondPromise
  .then( (result) => { console.log(result) } )
  .catch( (result) => { console.log(result, 'Нужны еще коты!') } )




// Примеры работы с async и await
async function resources() {

    // Выводим все объкты - 100 
    let listingResources = await fetch('https://jsonplaceholder.typicode.com/posts');
    let resources = await listingResources.json();
    console.log(resources);

    // Создаем нвоый объект - 101
    let creatingResource = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let newResource = await creatingResource.json();
    console.log(newResource);

    // апдейт обпредыдущего объекта (?)
    let updatingNewResource = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    let updatingResource = await updatingNewResource.json();
    console.log(updatingResource);

    // Удаляем объект
    let deleteResource = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
    let deleteR = await deleteResource.json();
    console.log(deleteR);
  }
  
  resources()