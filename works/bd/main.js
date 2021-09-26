// Устанавливаем нужные переменные и парсим JSON
let mWrapper = document.querySelector("#modalWrapper"),
  mClose = mWrapper.querySelector("#modalNo"),
  mDelete = mWrapper.querySelector("#modalYes"),
  mTitle = mWrapper.querySelector("#modalTitle"),
  // В data есть объекты на каждый ID
  // Если есть ID которого нет в списке data - используем свойство notFound
  storage = JSON.parse(`
{
"data": {
"id1": {
"title": "create database 'base1"
},
"id2": {
"title": "use 'base1'"
},
"id3": {
"title": "drop database 'base1"
},
"id4": {
"title": "show databases"
},
"id5": {
"title": "show tables"
},
"id6": {
"title": "show grants"
},
"id7": {
"title": "create table 'table1' ('id' int primary key auto_increment no null)"
},
"id8": {
"title": "drop table 'table1'"
},
"id9": {
"title": "ALTER table 'table1' rename to 'table2'"
},
"id10": {
"title": "ALTER table 'table1' add column 'name' varchar(25)"
},
"id11": {
"title": "ALTER table 'table1' modify column 'name' int"
},
"id12": {
"title": "ALTER table 'table1' drop column 'name'"
},	
"id13": {
"title": "create user 'user1'"
},
"id14": {
"title": "create user 'user1' @ 'localhost' identify(ied) by '1234'"
},
"id15": {
"title": "select * from 'table1'"
},
"id16": {
"title": "select tb.id,tb.name from table2 tb"
},
"id17": {
"title": "select * from 'table1' where id=2"
},
"id18": {
"title": "select * from 'table1' where cost > 100"
},
"id19": {
"title": "select * from 'table1' where cost > 100 AND id > 5"
},
"id20": {
"title": "select * from 'table1' where cost > 100 OR id > 5"
},
"id21": {
"title": "select * from 'table1' where NOT cost=100"
},
"id22": {
"title": "select * from 'table1' where cost between 100 and 200"
},
"id23": {
"title": "select * from 'table1' where name ('apple', 'banana', 'orange')"
},
"id24": {
"title": "select * from 'table1' where name like '%ple'"
},
"id25": {
"title": "select * from 'table1' order by cost asc"
},
"id26": {
"title": "select * from 'table1' order by cost desc"
},
"id27": {
"title": "select count(*) from 'table1' where coust=500"
},
"id28": {
"title": "select distinct from 'table1'"
},
"id29": {
"title": "drop table 'readers'"
},
"id30": {
"title": "DELETE FROM readers WHERE Id>5'"
},
"id31": {
"title": "Delete from readers where Id=1'"
},
"id32": {
"title": "UPDATE readers set Section='Сказка' where ID=5"
},
"id33": {
"title": "UPDATE readers set Section='Сказка' where Section='Детская литература' "
},
"id34": {
"title": "SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
},
"notFound": {
"title": "Not found"
}
}
}
`);

// Определяется нужный заголовок/контент из JSON и отдаётся на рендер в createWindow
function openWindow(el) {
  let id = el.dataset.winId,
    data = storage.data["id" + id];

  if (!data) data = storage.notFound;

  createWindow(data, id);
}

// Устанавливаем данные в виде (в DOM) и отображаем окно
function createWindow(data, id) {
  mTitle.innerHTML = data.title;

  mWrapper.style.display = "flex";
}

// Делегируем слушатель рапперу
document.querySelector("#wrapper").addEventListener("click", function (e) {
  let target = e.target;

  // Если клик по рапперу, но не по кнопке с идентификатором - выходим
  if (!target.closest("button") || target.dataset.winId === undefined) return;

  // Запускаем отрисовку окна
  openWindow(target);
});

// Просто слушатели на закрытие окна - по фону и по крестику в углу
mWrapper.addEventListener("click", (e) =>
  e.target === mWrapper ? (mWrapper.style.display = "none") : null
);
mClose.addEventListener("click", (e) => (mWrapper.style.display = "none"));
mDelete.addEventListener("click", (e) => (mWrapper.style.display = "none"));

function removeElement(elementClass) {
  let element = document.getElementsByClassName(elementClass);
  while (element.length) {
    element[0].remove();
  }
}

function rand() {
  var variants = Array.from(document.getElementsByClassName("block"));
  var index = Math.floor(Math.random() * variants.length);
  variants.forEach((div) => div.classList.remove("visible"));
  variants[index].classList.add("visible");
}
