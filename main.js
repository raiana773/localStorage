// ! localStorage - это веб-хранилище, то есть данные, хранящиеся локально в браузере пользователя.
// ! localStorage вы можете хранить информацию в фориате ключ-значение.
// ? Ключи и значение всегда строки
// если нам необходимо хранить данные в хранилище как массивы и объекты то нам необходима
// преоброзовать эти массивы и объекты в строки с помощью метода
// ? JSON.stringify()
//  а преоброзование наоборот в строк в массивы и объекты мы можем воспользоваться методом
// ? JSON.parse()

// localStorage.getItem('task-data')
// ? getItem() позволяет получить значение элемента хранилища по ключу

// localStorage.setItem('task-data', '[]')
// ? setItem() принимает ключ и значения.Позволяет добавить новые данные
// ? в localStorage - то есть установить для ключа указанного значение,
// ? если в хранилище есть данные с таким ключом то они перезаписываются

// localStorage.removeItem('tasks-data')
// localStorage.clear()
// ? removeItem() принимает ключ и удаляет элемент из хранилища по ключу
// ? clear() полностьюочищяет ocalStorage

// ! JSON - JavaScript Object Natation и представляет собой текстовый формат
// ! для хранения и обмена данными. Говоря простыми словами, это такой формат ,
// !который используется для того, чтобы передавать данные между бэкендом и фронтендом и также для хранения данных в localstorage

// ! практика
// создаем переменные и вытаскиваем наши элементы
// let btn = document.querySelectorAll(".btn");
// let inp = document.querySelector(".task-input");
// let list = document.querySelector(".task-list");
// // вытаскиваем значание из нашего инпута то что ввыдит пользователь

// btn.addEventListener("click", () => {
//   console.log(inp.val());
// });

// ! Разбор
// localStorage.setItem("goods", JSON.stringify([12, { name: "Polina" }]));
// console.log(JSON.parse(localStorage.getItem("goods")));
// localStorage.removeItem("goods");
// console.log([12, { name: "Polina" }]);
// localStorage.clear();

// ? они похожи то есть ответ
// console.log(window.localStorage);
// console.log(this.localStorage);
// console.log(localStorage);

// console.log(typeof localStorage);   // ? object всегда объект

// ! localStorage
// localStorage.setItem('breakfast', 'eggs')
// localStorage.setItem('lunch', 'soup')
// console.log(localStorage.getItem('breakfast'));
// console.log(localStorage.getItem('eggs'));  // ? если нет такого ключа то в концоль выходит null
// localStorage.removeItem('breakfast')
// localStorage.clear()

// ! sessionStorage
// sessionStorage.setItem('language', 'JS');
// console.log(sessionStorage.getItem('language'));

// ! Todo list
// let btn = document.querySelector('.btn');
// let inp = document.querySelector('.task-input');
// let list = document.querySelector('.task-list');

// btn.addEventListener('click', () => {
// ? события на клик на кнопку добавить
//     if(!inp.value.trim()){
// ? проверка на заполненость полей
//         alert('Заполните поле')
//         return;
//     }
//     let obj = {
//         task: inp.value
//     }; // ? помещяем значение инпута в свойство task нового объекта
//     setItemToStorage(obj)  // ? вызов фукции добавления в localStorage
//     createElement(); // ?  вызов функции отображения данных
//     inp.value = ''; // ? очищаем инпут
// });
// createElement();  // ? здесь у нас вызфывется функция

// function createElement(){
// ? отображение данных
//     if(!localStorage.getItem('tasks-data')){
// ? если что нибудь в localStorage
//         localStorage.setItem('tasks-data', '[]')  // ? если нет то добовляем пустой массив
//     }
//     let newData = JSON.parse(localStorage.getItem('tasks-data'));  // ? получаем массив из localStorage
//     list.innerHTML = ''; // ? очищяем страницу, если это не добавить то он будет повторятся
//     newData.forEach((item, index) => {
// ? перебираем массив и для каждого элемента создаем новый массив li тэг
//         let li =document.createElement('li');
//         let btnDelete = document.createElement('button');
//         li.innerText = item.task;
//         btnDelete.innerText = 'Delete';
//         li.appendChild(btnDelete);
//         list.appendChild(li);
//         btnDelete.addEventListener('click', () => {
//             deleteElement(index);
//         });
//     });
// }

// function setItemToStorage(task){
// ? добовление новых тасков в localStorage
//     let data = JSON.parse(localStorage.getItem('tasks-data')) // ? получаем массив и преобразуем в обычный формат
//     console.log(data);
//     data.push(task);  // ? добавляем в массив новый таск
// [{task: 'as'}]
//     localStorage.setItem('tasks-data', JSON.stringify(data)) // ? обновленный массив ложим обратно в localStorage
// }

// function deleteElement(index){
//     let data = JSON.parse(localStorage.getItem('tasks-data'));
//     data.splice(index, 1)
//     console.log(index);
//     localStorage.setItem('tasks-data', JSON.stringify(data));
//     createElement();
// }
