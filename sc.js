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
    let num = prompt ('Введите число: ');
    if (num == 0) {
        alert("Число равно нулю");
        
    } else {
        alert("Число не равно нулю");
        }
}

document.querySelector("#submit2").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num > 0) {
        alert("Число число больше нуля");
        
    } else {
        alert("Число меньше нуля");
        }
}

document.querySelector("#submit3").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num < 0) {
        alert("Число меньше нуля");
    } else {
        alert("Число больше нулю");
        }
}

document.querySelector("#submit4").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num >= 0) {
        alert("верно");
        
    } else {
        alert("неверно");
        }
}

document.querySelector("#submit5").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num <= 0) {
        alert("верно");
        
    } else {
        alert("неверно");
        }
}

document.querySelector("#submit6").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num != 0) {
        alert("верно");
        
    } else {
        alert("неверно");
        }
}

document.querySelector("#submit7").onclick = function(){
    let num = prompt ('Введите слово: ');
    if (num == "test") {
        alert("верно");
        
    } else {
        alert("неверно");
        }
}

document.querySelector("#submit8").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num == 1) {
        alert("верно");
    } else {
        alert("неверно");
        }
}

document.querySelector("#submit9").onclick = function(){
    let num = prompt ('Введите число: ');
    let w = num == 2 ? true: false;
    if (w == true) {
        alert("верно")
        
    } else {
        alert("неверно")
        }
}

document.querySelector("#submit10").onclick = function(){
    let num = prompt ('Введите число: ');
    let w = num == 2 ? true: false;
    if (w == false) {
        alert("верно")
        
    } else {
        alert("неверно")
        }
}

document.querySelector("#submit11").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num > 5) {
        if (num < 5) {
            alert("верно")
        } else {
            alert("неверно")
        }
    } else {
        alert("неверно")
    }
}

document.querySelector("#submit12").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num == 2) {
        alert(num + 7)
    } if (num == 0) {
        alert(num + 7)
    } else {
        alert(num / 10)
    }
}

document.querySelector("#submit13").onclick = function(){
    let a = prompt ('Введите число: ');
    let b = prompt ('Введите число: ');
    if (a <= 1) {
        if (b >= 5) {
            alert(a+b)
        } else {
            alert(a-b)
        }
    } else {
        alert(a-b)
    }
}

document.querySelector("#submit14").onclick = function(){
    let a = prompt ('Введите число: ');
    let b = prompt ('Введите число: ');
    if (a > 2) {
        if (a < 11) {
            if (b >= 6) {
                if (a < 14) {
                alert("Верно")
            } else {
                alert("Неверно")
            }
            }
        } 
    }
}

document.querySelector("#submit15").onclick = function(){
    let num = prompt ('Введите число: ');
    switch (num) {
	    case 1:
	    	alert("зима")
	    break;
	    case 2:
	    	alert("весна")
	    break;
	    case 3:
	    	alert("лето")
	    break;
	    default:
	    	alert("осень")
	    break;
    }   
}

document.querySelector("#submit16").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num/10 == 1) {
        alert("1 декада")
    } if (num/10 == 2) {
        alert("2 декада")
    } if (num/10 == 3) {
        alert("3 декада")
    }
}

document.querySelector("#submit17").onclick = function(){
    let num = prompt ('Введите число: ');
    if (num/3 == 1) {
        alert("весна")
    } if (num/3 == 2) {
        alert("лето")
    } if (num/3 == 3) {
        alert("осень")
    } if (num/3 == 4) {
        alert("зима")
    }
}

document.querySelector("#submit18").onclick = function(){
    let str = prompt('abcde');

    if (str[0] == "a") {
	alert("да");
    } else {
        alert("нет")
    }
}

document.querySelector("#submit19").onclick = function(){
    let str = prompt('12345');

    if (str[0] == "1" || "2" || "3") {
	alert("да");
    } else {
        alert("нет")
    }
}

document.querySelector("#submit20").onclick = function(){
    let str = prompt('123');
    let num = Number(str);
    let sum = num[1] + num[0] + num[2];
    alert(sum);
}

document.querySelector("#submit21").onclick = function(){
    let num = '123033';
    let sum1 = num[0] + num[1] + num[2];
    let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
}

document.querySelector("#submit22").onclick = function(){
    let str1='Привет,'  
    let str2='Мир!'
    alert(str1+str2)
}

document.querySelector("#submit23").onclick = function(){
    let a = prompt("Ваше имя?")
    alert("Ваше имя " + a)
}

document.querySelector("#submit24").onclick = function(){
    let a = prompt("Ваше число")
    alert("квадрат вашего числа: " + a*a)
}

function summa(arr) {
    var sum = 0;
        for(var i = 0; i < arr.length; i++) 
        sum += arr[i];
    return sum;}

var array = [6, 8, 1];
var array_2 = [6, 8, 1, 7];
var array_3 = [6, 8, 1, 90];
var res = summa(array);
res *= 2;
console.log("Результат: " + res);


var num = 10;

function info() { 
    var num = 20; 
    console.log(num);
}

info()

console.log(num);