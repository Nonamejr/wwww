/*str, my_str, myStr,a1, $, $а допустимые имена переменных*/

// Переменные 
// Ключевое слово var, let, const 
// Формат LowerCamelCase (верблюжья нотация)

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(second);

// Типы данных, классификация

// Примитивный тип данных

//Строка string 
// двойные кавычки, одинарные кавычки-простые, обратные-имеют расширенный функционал

// let string = "hello';
// console.log(string);
// let name = "Иван"; 
// console.log(name);

//Числа number

//let number = 5;
//console.log(number);

//Специальный тип данных null
//null// специальное значение, которое представляет отсутсутствующий объект

// console.log(something);

//undefined //представляет значение переменной, которая не была инициализирована

// let numb;
// console.log(numb);

//NaN //специальное значение "не число", которая говорит о том, что была выполнена бессмысленная операция

//console.log('string' * 4);

//Infinity //бесконечность

//console.log(4/0);

//Логический тип данных boolean (true, false)

//let boolean = true;
//console.log(boolean);

// Абстрактный тип данных object(}, это набор свойст и значений

//let obj = {};

//let persone = {
//    name: 'kseniya',
//    age: 14,
//    icMarriered: false
//};

//console.log(persone['name']);

//Массив

//let arr = ['plum.jpeg', 'apple.bmp', 'orange.png'];
//console.log(arr[0]);

//Простое общение с пользователем

//alert("hello, Ksenya!");
//alert("ilv");

//let answer = confirm('How are you');
//console.log(answer);

//let answer = promt('18 yesti??????', 'da')
//console.log(answer)

// оператор typeof, для определения типа данных
// let answer = prompt('Есть ли вам 18 лет?', 'Да');
// console.log(typeof(answer));
// оПЕРАТОРЫ js
// унарный +

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

//Инкремент и декремент
//++префиксный инкремент
// --постфиксный инкремент

//let post = 10;
//    decr = 10;

//    console.log(incr++);
//    console.log(--decr);

//Остаток от деления

// console.log(5%2);

//= присваивание 
// == проверка на равенство

//console.log('2' == 2);


//оператор && (и)

//let isChecked = true;
//    isClosed = true;
//consolelog(isChecked && isClosed);

// оператор || (или)

//let isChecked = true;
//    isClosed = true;
//consolelog(isChecked || isClosed)
document.querySelector("#submit1").onclick = function(){
    let name = "jon";
    let admin = name;
    alert(admin);
}

document.querySelector("#submit2").onclick = function(){
    let planet = "zemlya";
    let posyatitel = "vladimir";
    console.log(planet, posyatitel)
}

document.querySelector("#submit3").onclick = function(){
    let colorEyes = "red";
}

document.querySelector("#submit4").onclick = function(){
    let userName = "vasya";
    let user = userName;
    console.log(userName);
}

document.querySelector("#submit5").onclick = function(){
    const num = 10;
    prompt(num);
}

document.querySelector("#submit6").onclick = function(){
    const a = 15;
    const b = 8;
    const v = a+b;
    const c = a-b;
    const x = a*b;
    const z = a/b;
    console.log(v, c, x, z);
}

document.querySelector("#submit7").onclick = function(){
    const c = 35;
    const d = 5;
    const result = c + d;
    prompt(result);
}

document.querySelector("#submit8").onclick = function(){
    const q = 10;
    const w = 22;
    const e = 5;
    console.log(q + w + e);
}

document.querySelector("#submit9").onclick = function(){
    const a = 77;
    const b = 52;
    const c = a + b;
    const d = 7;
    const result = c + d;
    prompt("Значение вычисления: " + result)
}

document.querySelector("#submit10").onclick = function(){
    let str = "Hello, World!";
    alert(str);
}

document.querySelector("#submit11").onclick = function(){
    let str1 = "Hello,";
    let str2 = " World!";
    alert(str1 + str2);
}

document.querySelector("#submit12").onclick = function(){
    let name1 = "Lereos";
    alert("Hello " + name1);
}

document.querySelector("#submit13").onclick = function(){
    const age = 14;
    alert("I am " + age + " years old");
}

document.querySelector("#submit14").onclick = function(){
    let str = prompt("Your name ?");
    alert("Your name is " + str);
}

document.querySelector("#submit15").onclick = function(){
    let str = prompt("Your number ?");
    alert(str*str);
}

document.querySelector("#submit16").onclick = function(){
    let str = prompt("1 - узнать сколько секунд в часе" / 
    "2 - узнать сколько секунд в сутках" /
    "3 - узнать сколько секунд в в месяце" / 
    "4 - узнать сколько секунд в году");
    if (str == 1) {
        alert(60*60*60 + " секунд");
    } else if (str == 2) {
        alert(60*60*60*24 + " секунд");
    } else if (str == 3) {
        alert(60*60*60*24*31 + " секунд");
    } else if (str == 4) {
        alert(60*60*60*24*31*365 + " секунд");
    } else {
        alert("Wrong number");
    }
}

document.querySelector("#submit17").onclick = function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    alert(hours + "." + minutes + "." + seconds);
}