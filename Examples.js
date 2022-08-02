import _ from 'lodash';

/*
//switch
let task = "удалить";
switch (task) {
    case "удалить":
        console.log("delete");
        break;
    case "переименовать":
        console.log("rename");
        break;
    case "редактировать":
        console.log("edit");
        break;
    default:
        console.log("Не знаю таких строк")
}
*/

/*
//switch
let price = 10000, range = "month";
switch (range) {
    case "day":
        console.log(price + " P в день");
        break;
    case "week":
        console.log(price + " Р в неделю");
        break;
    case "month":
        console.log(price + " Р в месяц");
        break;
    default:
        console.log("Не известный период времени")
}
*/

/*
//Калькулятор
let a = 80, b = 0, sign = "/";
switch (sign) {
    case "*":
        console.log(a*b);
        break;
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Мне не известен такой оператор")
}
*/

/*
//Калькулятор с проверкой деления на 0, задание 4.8
let a = 80, b = 2, sign = "*";
if (b === 0 && sign === "/") {
    console.log("Нельзя делить на ноль")
} else {
    switch (sign) {
        case "*":
            console.log(a * b);
            break;
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "/":
            console.log(a / b);
            break;
        default:
            console.log("Мне не известен такой оператор")
    }
}
*/

/*
//Задание 4.9
let temp = -9, weather = "clear";
let activity;
if (temp >= 25 && weather === "clear") {
    activity = "golf"
} else if (temp >= 10 && weather === "clear") {
    activity = "bowling"
} else {
    activity = "hiking"
}
console.log(activity)
*/

/*
//Цикл while
let i = 1;
while (i <= 500) {
console.log(i++);
}
 */

/*
//Цикл do-while
let i = 1;
do {
    console.log(i++);
} while (i <= 500)
 */

/*
//Цикл for
for ([Инициализация]; [Условие]; [Действие после итерации]) {
    // Тело цикла
}
for (let i = 1; i <= 500; i++) {
    console.log(i)
}
for (let i = 1, factorial = 1; i <= 10; i++, factorial*=i) {
    console.log(i, factorial);
}
let word = "string";
	for (let i = 0; i < 5; i++) {
	word += "_1" ;
	if (word == "string_1_1_1") break;
	console.log(word);
}
let word = "string";
for (let i = 0; i < 5; i++) {
word += "_1" ;
if (word == "string_1_1_1") {
continue;
}
console.log(word);
}
 */

/*
//Задание 5.1 Сумма кратных чисел
let start = 0, end = 50;
let count = Math.floor((end - start) / 5), i = 1, a = start, b = start;
while (i <= count) {
    a = a + 5;
    b = b + a;
    i++
}
console.log(b)
 */

/*
//Задание 5.2 Перевернуть строку
let word = "деписолев";
let length = word.length - 1;
let newWord = "";
while (length >= 0) {
    newWord += word.charAt(length);
    length--;
}
console.log(newWord);
*/

/*
//Задание 5.3
let word = "топотт";
let length = word.length -1;
let newWord = "";
while (length >= 0) {
    newWord += word.charAt(length);
    length--;
}
if (word === newWord) {
    console.log("Слово является полиндромом!")
} else {
    console.log("Слово НЕ является полиндромом!")
}
 */

/*
//Function declaration
function printHello(name) {
    console.log(`Привет, ${name}!`);
}
printHello("Саша");
//Function expression
let printHello = function printHello(name) {
    console.log(`Привет, ${name}!`);
}

printHello('Саша');
 */

/*
//Task 6.1
let price = 80000;
function priceMessage() {
    console.log("Данный товар стоит " + price + " рублей")
}
priceMessage();
*/

/*
//Task 6.3 Функция, в которой используется объект arguments, на случай передачи польшего количества аргументов чем мы объявили
let num_1 = 3, num_2 = 6;
function mult(a, b) {
    return arguments[0] * arguments[1] * arguments[2];
}
console.log(mult(num_1, num_2, 2))
 */

/*
//Стрелочная функция
const square = (num) => num * num;
console.log(square(5))
 */

/*
//Task 6.3
let num = 9;
function square() {
    return num * num
}
console.log(square())
 */

/*
//Task 6.4
let num = 5, result = "";
for (let i = 1; i <= 3; i++) {
    num = num * num;
    result += num;
    result += " "
}
console.log(result.trimRight())
*/

/*
//Task 6.5
let data = "привет";
function getNumber(data) {
    if (isNaN(data)) {
        return 0;
    } else {
        return data
    }
}
console.log(getNumber(data))
*/

/*
//Task 6.6
let value = 4, total = 80;
function getPercent(value, total) {
    return 100 * value / total
}
console.log(getPercent(value, total))
*/

/*
//Task 7.1 Объект, работа с ключами объекта
const obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
}
const newObj = {};
let property = "", count = 1;
for (let key in obj) {
    property = obj[key];
    if (typeof newObj[property] === "number" && newObj[property] >= 1) {
        newObj[property]++
    } else {
        newObj[property] = count
    }
}
console.log(newObj);
 */

/*
//Task 7.2 Сложно, делал 3 дня, про объекты в массиве, поииск максимального
//В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.
//Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.
let list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45},
    {product: "Strawberry2", price: 45}
];
let max = [];
let i = 0;
let lastEntity = list.length - 1;
max = list[lastEntity];
do {
    if (max.price <= list[i].price) {
        max = list[i];
    }
    i++;
} while (i < list.length - 1);
console.log(max.product);
*/

/*
//Task 9.1
let list = ["Груша", "Яблоко"];
list.unshift("Яблоко");
console.log(list);
list.pop();
console.log(list);
list.push("Клубника");
console.log(list);
 */

/*
//Task 9.2
let list = ["Груша", "Яблоко"];
let max = list[0];
for (let index = 0; index < list.length; index++) {
    if (max.length < list[index].length) {
        max = list[index];
    }
}
console.log(max)
*/

/*
//Task 9.3
let list_1 = [12, 3], list_2 = [2, 1];
let listCommon = [];
for (let i of list_1) {
    listCommon.push(i * i)
}
for (let i of list_2) {
    listCommon.push(i * i)
}
console.log(listCommon)
 */

/*
//Task 9.4
let list = [23, 13, 3];
let sum = 0;
for (let i of list) {
    sum = sum + i
}
console.log(sum)
 */

/*
//Task 9.5
let list = [12, -4, 5, 32, 2];
let positiveSum = 0;
for (let i of list) {
    if (i > 0) {
        positiveSum = positiveSum + i
    }
}
console.log(positiveSum)
 */

/*
//Task 9.6 Сложно, про сумму целых чисел в массиве
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
//let list = [1, 2, 3, 4, 5];
let newList = []; // [2, 3, 4, 5]
let sum = 0;
let znaminatelIndex;
let isThereInteger;
for (let i of list) {
    if (i !== 1) {
        newList.push(i)
    }
}
console.log("Наш новый массив: " + newList)
for (let i2 = 0; i2 < newList.length; i2++) {
    console.log("–––––––––––––")
    console.log("Шаг " + i2);
    console.log("Значение " + newList[i2]);
    for (let i3 = 0; i3 <= i2; i3++) {
        znaminatelIndex = i3 - 1;
        console.log("Шаг цикла " + i3 + ", делим на " + newList[znaminatelIndex]);
        if (!Number.isInteger(newList[i2] / newList[znaminatelIndex])) {
            console.log("Not Integer!")
            isThereInteger = false;
        } else {
            console.log("Integer!")
            isThereInteger = true;
            break;
        }
    }
    console.log(isThereInteger);
    if (isThereInteger) {
    } else {
        sum = sum + newList[i2];
    }
}
console.log();
//console.log(Number.isInteger(12.5))
//console.log(newList)
console.log(sum)
*/

/*
//Task 9.6 Исправленный вариант
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let key in list) {
    if (list[key] === 1) {
        list.splice(key, 1);
    }
}
//Теперь у нас массив без единички
let sum = 0, isThereInteger;
for (let key in list) {
    if (list[key] === 2) {
        sum += list[key];
    } else {
        for (let i = 2; i < list[key]; i++) {
            if (Number.isInteger(list[key] / i)) {
                isThereInteger = true;
                break;
            } else {
                isThereInteger = false;
            }
        }
        if (!isThereInteger) {
            sum += list[key];
        }
    }
}
console.log(sum)
*/

/*
//Task 9.7 Произведение максимума и минимума из массива
let list = [2, 45, 3, 23, 6];
let max = list[0], min = list [0];
for (let i = 0; i < list.length; i++) {
    if (max < list[i]) {
        max = list[i]
    }
}
for (let i = 0; i < list.length; i++) {
    if (min > list[i]) {
        min = list[i]
    }
}
console.log(max);
console.log(min);
console.log("Произведение максимума и минимума = " + max * min)
*/

/*
//Task 9.8 Перевернуть массив без reverse
let list = [2, 45, 3, 23, 6], newList = [];
for (let i = list.length - 1; i >= 0; i--) {
    newList.push(list[i])
}
console.log(newList)
 */

/*
//Task 9.9 Преобразование строки в массив
let sentence = "Завтра будет лучше чем вчера", array = [""], arrayIndex = 0;
for (let i = 0; i <= sentence.length; i++) {
    array[arrayIndex] += sentence.charAt(i).trim();
    if (sentence.charAt(i) === " ") {
        arrayIndex++;
        array[arrayIndex] = "";
    }
}
console.log(array)
 */

/*
//Task 9.10 Количество четных элементов
let list = [2, 45, 3, 23, 6];
function count(array) {
    let count = 0;
    for (let key in array) {
        if (Number.isInteger(array[key] / 2)) {
            count++;
        }
    }
    return count;
}
console.log(count(list));
 */

/*
//Task 9.11 Функция среднего в массиве
let list = [2, 45, 3, 23, 6], sum = 0;
function average(array) {
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return Math.round(sum / array.length);
}
console.log(average(list))
 */

/*
//Task 9.12 Сумма до логического значения в массиве
let list = [2,false,4,23,true,55,2], sum = 0;
for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "boolean") {
        sum = sum + list[i];
    } else {
        break;
    }
}
console.log(sum)
 */

/*
//Task 9.13 Сформировать массив
let start = 10, end = 20, list = [], arrayLength = 0;
arrayLength = end - start;
for (let i = 0; i <= arrayLength; i++) {
    list[i] = start + i;
}
console.log(list)
 */

/*
//Task 9.14
let list = [2, "привет", 23, true, 2, false, 2], numbers_list = [], numbers_list_index = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i] === false) {
        break
    }
    if (typeof list[i] === "number") {
        numbers_list[numbers_list_index] = list[i];
        numbers_list_index++;
    }
}
console.log(numbers_list);
 */

/*
//Task 9.15
let list = ["Искать","такси","DEFAULT","DefAult"], count = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i].toLowerCase() !== "default") {
        count++;
    }
}
console.log(count)
 */

/*
//Task 9.16
let list = ["сесть","поглядывать","оставаться","позиция"], result = "";
for (let i = 0; i < list.length; i++) {
    result += list[i].charAt(0);
}
console.log(result)
 */

/*
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
//let list = [1, 2, 3, 4, 5];
let newList = []; // [2, 3, 4, 5]
let sum = 0;
let znaminatelIndex;
let isThereInteger;
for (let i of list) {
    if (i !== 1) {
        newList.push(i)
    }
}
console.log("Наш новый массив: " + newList)
for (let i2 = 0; i2 < newList.length; i2++) {
    console.log("–––––––––––––")
    console.log("Шаг " + i2);
    console.log("Значение " + newList[i2]);
    for (let i3 = 0; i3 <= i2; i3++) {
        znaminatelIndex = i3 - 1;
        console.log("Шаг цикла " + i3 + ", делим на " + newList[znaminatelIndex]);
        if (!Number.isInteger(newList[i2] / newList[znaminatelIndex])) {
            console.log("Not Integer!")
            isThereInteger = false;
        } else {
            console.log("Integer!")
            isThereInteger = true;
            break;
        }
    }
    console.log(isThereInteger);
    if (isThereInteger) {
    } else {
        sum = sum + newList[i2];
    }
}
console.log();
//console.log(Number.isInteger(12.5))
//console.log(newList)
console.log(sum)
*/

/*
//Задача от Михона на формирование массива
let array = ["one", "two", "three", "four", "five"]; //это наш массив
let sizeOfContainer = 2; //это количество элементов в контейнере нового массива (чанк или кусок в задаче)
let tempArray = [""]; newArray = [""], index = 0; //тут задал доп переменные для дальнейших вычислений
let quantityOfContainers = Math.ceil(array.length / sizeOfContainer);//тут посчитал сколько будет контайнеров в новом массиве, с округлением в большую сторону
for (let i = 0; i < quantityOfContainers ; i++) { //цикл, который формирует контейнеры нового массива
    for (let i = 0 ; i < sizeOfContainer ; i++) { //цикл, который формирует содержание контейнеров
        tempArray[i] = array[index]; //tempArray это как раз контейнер или чанк, который я заполняю данными из изначального массива
        index++; //это счетчик элементов в изначальном массиве
        if (index == array.length) break; //тут выход из цикла когда закончатся элементы основного массива
    }
    newArray[i] = tempArray; //тут в новый массив записываю чанк из цикла выше
    tempArray = [""] //тут очищаю чанк, чтобы в следующем цикле записать в него следующие значения из основного массива
}
console.log(newArray)
 */

/* Задача на перемножение матриц
let array1 = [
    [2,5],
    [6,7],
    [1,8],
];
let array2 = [
    [1,2,1],
    [0,1,0],
]
let finalArray = [];
console.log(array1[2][1]);//8, сначало строка потом столбец, начиная с 0
console.log("число строк матрицы 1 = " + array1.length);//3
console.log("число столбцов матрицы 1 = " + array1[0].length)//2
console.log("число строк матрицы 2 = " + array2.length);//2
console.log("число столбцов матрицы 2 = " + array2[0].length)//3

//TODO: число стобцов матрицы 1 должно быть равно чслу строк матрицы 2

let row = 0, column = 0;

for (let i = 0; i < array1.length; i++) { //создал пустую заготовку итогового массива
    finalArray[i] = [];
}
console.log(finalArray);
 */




/*Основы программирования на Java Script ||*/

/*
//Task 1.1
let message = "Приветствую вас";
console.log(message.toLowerCase().startsWith("привет"));
 */

/*
//Task 1.2
let greetings = "Username, вы можете загрузить новую версию программы.";
console.log(greetings.toLowerCase().lastIndexOf("username"));
 */

/*
//Task 1.3
let firstDiv = "<p>Внешний параграф<p>Внутренний параграф</p></p>";
let a = firstDiv.indexOf("<p>") != -1; //индекс первого открывающего тега
let b = firstDiv.indexOf("</p>", firstDiv.indexOf("<p>") + 3) != -1; //индекс первого закрывающего тега
let c = firstDiv.indexOf("<p>", firstDiv.indexOf("<p>") + 3) != -1; //индекс второго открывающего тега
let d = firstDiv.indexOf("</p>", b + 3) != -1; //индекс второго закрывающего тега
if (a && b && c && d) {
    console.log("true")
} else {
    console.log("false")
}
*/

/*
//Task 1.4
let road = "15.2 km";
let miles = 0.62 * road.slice(0,road.indexOf(" "));
console.log(miles.toFixed(1));
 */

/*
//Task 1.5
let words = "Солнечная панель";
if (words.indexOf(" ") != -1) {
    console.log("Больше одного слова")
} else {
    console.log("В строке одно слово")
}
 */

/*
//Task 1.6
let symbols = "Первый номер";
(isNaN(symbols.slice(0,1))) ? console.log("First symbol is NOT a number") : console.log("First symbol is a number");
*/

/*
//Task 1.7
let symbols = "rhinoceros";
let sumOfTwo = symbols.codePointAt(0) + symbols.codePointAt(1);
(sumOfTwo % 2 > 0) ? console.log("Символ обнаружить не удалось") : console.log(String.fromCodePoint(sumOfTwo / 2));
 */

/*
//Task 1.8 Регулярка с очищением от определенных символов
let phone = "+712::34:567*8,90";
console.log(phone.match(/[^\,^\:^\*]/g).join(""))
 */

/*
//Task 1.9 Создать массив из строки
let emails = "example@ex.ru primer@primer.com email@com.ru";
let array = emails.split(/\s/g);
console.log(array);
 */

/*
//Task 1.10
let ticket = "BM-12234567:RU";
if (ticket.search(/^\w\w-\d{12}/g) >=0) {
    console.log("Выбран билет в театр");
} else if (ticket.search(/^\w\w-\d{8}/g) >=0) {
    console.log("Выбран билет на концерт");
} else {
    console.log("Билет не определен");
}
*/

/*
//Task 2.1
let values = ["Строка", true, "Число", "Объект", "Не число", false];
for (i in values) {
    if (typeof values[i] == "boolean") {
        values[i] = "Булевый тип";
        break;
    }
}
console.log(values);
 */

/*
//Task 2.2 Фильтр по массиву с регулярным выражением
let partNumbers = ["REGRG34FH","RGREEGT","354254","54GREG34FG"];
//let partNumbers = [1,2,3,4];
let newArray = partNumbers.filter(function(x) {
    return /\d\d\D\D$/.test(x);
});
console.log(newArray);
 */

/*
//Task 2.3 Выделить числа из строки и записать их в массив
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let array = layout.match(/\d+/g);
for (i in array) {
    array[i] = Number.parseInt(array[i]);
}
for (let i = 0; i <= array.length - 1; i++) {
    if (i%2 == 0) {
        array[i] = array[i] * array[i];
    }
}
console.log(array);
 */

/*
//Task 2.4 Сформироват массив из значений в другом массиве
const tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
];
// let array = []; //это мое решение
// for (i in tasks) {
//     array[i] = tasks[i].title;
// }
// console.log(array);
const titles = tasks.map(a => a.title); //это я посмотрел что в видео примере делают с помощью метода map
console.log(titles);
*/

/*
//Task 2.5 Выводим часть массива в новый массив
let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];
let noNameValues = [];
for (let i = 0; i <= values.length - 1; i++) {
    noNameValues[i] = typeof values[i];
};
let start = noNameValues.indexOf("boolean");
let end = noNameValues.lastIndexOf("boolean");
let result = [];
let index = 0;
for (i = start; i <= end; i++) {
    result[index] = values[i];
    index++;
}
console.log(result);
 */

/*
//Task 2.6 Поиск вхождения четырехзначного числа
let values = [22,443,5432,23];
let result = false;
for (i in values) {
    if (/\b\d{4}\b/g.test(values[i])) {
        result = true;
        break;
    }
}
console.log(result);
*/

/*
//Task 2.7 поиск в массиве четырехзначного числа и вывод его позиции
let values = [10, 180, 1120, 980];
let result = false;
for (i in values) {
    if (/\b\d{4}\b/g.test(values[i])) {
        result = true;
        break;
    }
}
function find(a) {
    return /\b\d{4}\b/g.test(a)
}
if (result) {
    console.log(values.findIndex(find));
} else {
    console.log("Искомый элемент не был найден");
}
 */

/*
//Task 2.8 Поиск в массиве элемента из двух слов и возврат его позиции
let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
];
for (i in users) {
    if (/\b\w+\b\s\b\w+\b/g.test(users[i].role)) {
        console.log(i)
    }
}
 */

/*
//Task 2.9
let randValues = [34,4,23,-100,432];
let semisortRandValues = []; //массив, в который сложу в начало намберс, а в конец все остальное
for (i in randValues) {
    if (typeof randValues[i] == "number") {
        semisortRandValues.unshift(randValues[i]) //добавляем в начало
    } else {
        semisortRandValues.push(randValues[i]) //добавляем в конец
    }
}
const compare = (a, b) => { //коллбек функция для сортировки
    if (a == b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
}
semisortRandValues.sort(compare);
console.log("Начальный массив: " + randValues);
console.log("Отсортированный массив: " + semisortRandValues);
*/

/*
//Task 2.10
let array = [[4,3,2],[1],[]];
console.log(array.sort());
 */

/*
//Task 2.11 Найти палиндромы и не палиндромы в массиве и посчитать их количество
let words = ["Заказ","Такси","Доход"];
let palindromCount = 0;
let notPalindromCount = 0;
for (i in words) {
    if (words[i].toLowerCase() == words[i].split("").reverse().join("").toLowerCase()) {
        palindromCount++;
    } else if (words[i].toLowerCase() !== words[i].split("").reverse().join("").toLowerCase()) {
        notPalindromCount++;
    }
}
console.log("Count of palindroms – " + palindromCount);
console.log("Count of not palindroms – " + notPalindromCount);
 */

/*
//Task 2.12 Разбить строку на массив и преобразовать символы в записях
let dates = "23.04.1996 07.10.2002 15.08.1945";
let splittedDates = dates.split(" ");
regExp = /\./g;
for (i in splittedDates) {
    splittedDates[i] = splittedDates[i].replace(regExp,"/");
}
console.log(splittedDates)
 */

/*
//Task 2.13 СЛОЖНО поиск подстроки и разбивка строки на объект с двумя массивами
let tickets = "Airplane: DR578, JN1089, NDK140, Train: AV432, FS452, OE402.";
tickets = tickets.replace(/[\,\.\:]/g, "");
let finalObject = {};
finalObject.train = [];
finalObject.airplane = [];
let ticketsArray = tickets.split(" ");
let a = 0;
let b = 0;
do {
    if (ticketsArray[a].toLowerCase() == "train") {
        b = a + 1;
        do {
            finalObject.train.push(ticketsArray[b]);
            b++;
        } while (b != ticketsArray.length && ticketsArray[b].toLowerCase() !== "airplane");
    }
    a++;
} while (a <= ticketsArray.length - 1);
a = 0;
b = 0;
do {
    if (ticketsArray[a].toLowerCase() == "airplane") {
        b = a + 1;
        do {
            finalObject.airplane.push(ticketsArray[b]);
            b++;
        } while (b != ticketsArray.length && ticketsArray[b].toLowerCase() !== "train");
    }
    a++;
} while (a <= ticketsArray.length - 1);
console.log(finalObject);
 */

/*
//Task 2.14 Количество чисел в массиве, сумма которых меньше 50. Не смог решить с помощью reduce и не понятно надо ли было.
let numbers = [10,20,33,55,100];
let sum = 0;
let ind = 0;
for (i in numbers) {
    sum += numbers[i];
    if (sum <= 50) {
        ind++;
    }
}
console.log(ind);
 */

/*
//Task 2.15 Посчитать сумму чисел в массиве из говна
let values = ["100","30","Не число","20","Тоже не число"];
let sum = 0;
for (i in values) {
    values[i] = Number(values[i]);
    if (/\d+/g.test(values[i])) {
        sum = sum + values[i];
    }
}
console.log(sum);
 */

/*
//Task 2.16 Сравнение двух массивов и формирование итогового с общими элементами из изначальных массивов
let array_1 = [2,4,7,8,1], array_2 = [2,5,11,6,1];
function intersection(array_1, array_2) {
    let result = [];
    for (a in array_1) {
        for (b in array_2) {
            if (array_1[a] == array_2[b]) {
                result.push(array_1[a]);
            }
        }
    }
    result.sort((a, b) => b - a);
    return result;
}
console.log(intersection(array_1, array_2));
 */

/*
//Task 3.1 Удаление элемента объекта
let car  = {
    model: "Audi",
    color: "white",
    weight: 1850,
    engine: "170 hp"
};
delete car.engine;
console.log(car);
 */

/*
//Task 3.2 Создание массивов из ключей и значений объектов
let goods = {
    title: "Самокат",
    price: 6000,
    good_id: 1
};
let keys = Object.keys(goods);
let values = Object.values(goods);
let result = keys.concat(values);
console.log(result);
 */

/*
//Task 3.3 Объединение двух объектов
let article = {
    title: "Загадки дачного огурца",
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении"
},
author = {
    name: "Ричард М.В.",
    age: 43
};
let result = Object.assign(article, author);
console.log(result);
 */

/*
//Task 3.4
let array = [true, 4, "word", "10n"];
console.log(`Количество элементов в массиве: ${array.length}`);
 */

/*
//Task 3.5
let employee  = [
    ["firstName", "Ivan"],
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
];
let index = 0;
for (i in employee) {
    if (employee[i].indexOf("hireDate",0) != -1) {
        index = i;
    }
}
employee.splice(index,1);
employee.push(["jobName", "IT PROG"]);
console.log(employee);
 */

/*
//Task 3.6
let array = [
    [ "boolean", true ],
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", {}]
];
function countString(array) {
    let count = 0;
    for (i in array) {
        if (typeof array[i][1] == "string") {
            count++;
        }
    }
    return count;
}
console.log("Количество строковых элементов в именованном массиве: " + countString(array));
 */

/*
//Task 4.1 использование контекста this как ключ в объекте
let pet_1 = {
    name: "Шарик",
    age: 10,
        getName() {
            return this.name + " " + this.age;
        }
},
pet_2 = {
    name: "Жучка",
    age: 5,
    getName() {
    return this.name + " " + this.age;
}
};
console.log(pet_1.getName());
 */

/*
//Task 4.2 указание или определение контектса
let input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников"
};
function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
};
sayHi = sayHi.bind(input); //указание контекста с помощью bind, создается новая функция
sayHi();
//sayHi.call(input); //указание контекста с помощью call, она сразу вызывает функцию
 */

/*
//Task 4.3
let pet = {
    name: "Диксон",
    breed: "Немецкая овчарка"
};
function getDescription() {
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed)
};
getDescription = getDescription.bind(pet);
console.log(getDescription());
 */

/*
//Task 4.4
let props= {
    name: "Анатолий",
    age: 29,
    sayHi: ()=>"привет"
};
function getValue() {
    console.log("Значения свойств объекта props (name: " + this.name + ", age: " + this.age + ")");
};
getValue = getValue.bind(props);
console.log(getValue());
 */

/*
//Task 4.5
let hero = {
    nick: "FirstHero",
    position: "Лагерь",
    getPosition: ()=>console.log("Позиция героя: " + hero.position)
};
console.log(hero.getPosition());
 */

/*
//Task 5.1 вывод значений атрибутов ключа объекта
let order = {
    productName: "Велосипед",
    costomerName: "Саша",
    salesName: "Петя",
    totalPrice: 15000
};
let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');
console.log(descriptor);
 */

/*
//Task 5.2 вывод из объекта ключей в строку за исключением функции
let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )}
};
let array = [];
for (i in employees) {
    if (typeof employees[i] != "function") {
        array.push(i);
    }
}
console.log(array.join(", "))
 */

/*
//Task 5.3 добавление в объект getter и setter
let firstName = "Александр", lastName = "Петров";
let user = {
    firstName,
    lastName,
    get getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set setFullName(string) {
        let array = string.split(/\s/g);
        this.firstName = array[0];
        this.lastName = array[1];
    }
};
user.setFullName = "ivan ivanov";
console.log(user);
 */

/*
//Task 5.4 создание класса
let name = "Pizza", phone = "81234567890";
class Delivery {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    validPhone() {
        return /^\+/g.test(this.phone);
    }
};
let deliveryName = new Delivery(name, phone);
console.log(deliveryName.validPhone());
 */

/*
//Task 5.5
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
};
class User extends Permissions {
    constructor(create, read, update, remove, name) {
        super(create, read, update, remove);
        this.name = name;
    }
}
let a = new User (false, true, false, false, "ivan");
console.log(a.name);
 */

/*
//Task 5.6
let array = [-12,-32,-43,-3,-1], num = 3;
function queue(num, array) {
    array.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += array[i];
    };
    return sum;
};
console.log(queue(num,array));
 */

/*
// Взять строку и сделать каждый n символ заглавным
const makeItFunny = (text, index) => {
    let result = '';
    let i = 1;
    while (i <= text.length) {
        if (i % index === 0) {
            result += text[i - 1].toUpperCase();
            i++;
        } else {
            result += text[i - 1];
            i++;
        }
    }
    return result;
}

const text = 'i never look back';
// Каждый третий элемент
console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'
 */

/*
// шифровальщик меняет буквы местами
const encrypt = (text) => {
    let lastSymbol = '';
    if (text.length % 2 !== 0) {
        lastSymbol = text[text.length - 1];
        text = text.slice(0, text.length - 1);
    }

    let result = '';
    for (let i = 0; i < text.length;) {
        result = result + text[i + 1] + text[i];
        i++;
        i++;
    }
    result = result + lastSymbol;
    return result;
}

console.log(encrypt('abcdef'));
 */

/*
//фибоначчи рекурсия
const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(7))
 0 1 1 2 3 5 8 13
 */

/*
//переворот числа
const reverse = (numbers) => {
    let result = '';
    numbers = String(numbers);
    if (numbers[0] === '-') {
        result = '-';
        for (let i = numbers.length - 1; i > 0; i--) {
            result += numbers[i]
        }
    } else {
        for (let i = numbers.length - 1; i >= 0; i--) {
            result += numbers[i]
        }
    }
    result = Number(result);
    return result;
}
console.log(reverse(123))
 */

/*
// рекурсия переворот строки
let text = 'abcd';

const reverse = (text) => {
    return text.length === 0 ? '' : text.slice(text.length - 1, text.length) + reverse(text.slice(0, text.length - 1))
}
console.log(reverse('abcd'));
/*
abcd
    d abc
        c ab
            b a
                a ''
                    ''
 */


/*
// функция переворота массива
const reverse = (arr) => {
    let reversedArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
        let firstItem = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = firstItem;
    }
}
const names1 = ['john', 'smith', 'karl'];
reverse(names1);
console.log(names1)
 */

// const buildDefinitionList = (arr) => {
//     if (arr.length === 0) {
//         return '';
//     }
//     let dtDdArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         dtDdArray[i].push(`<dt>${arr[i][0]}</dt>`);
//         dtDdArray[i].push(`<dd>${arr[i][1]}</<dd>`);
//     }
//     return `<dl>${dtDdArray.join('')}</dl>`;
// }

/*
const wordsReplacer = (text, arr) => {
    let wordsArray = text.split(' ');
    let replacedArray = [];
    for (const item of wordsArray) {
        arr.includes(item) ? replacedArray.push('$#%!') : replacedArray.push(item);
    }
    return replacedArray.join(' ');
}

const sentence = 'When you play the game of thrones, you win or you die';

console.log(wordsReplacer(sentence, ['die', 'thrones,']))
 */

/*
// Подсчет количества уникальных символов в строке через создание массива, массив приводим к уникальному виду удаляя повторяющиеся символы
// Перебирается строка при помощи цикла for
const countUniqChars = (text) => {
    const uniqChars = [];

    for (const char of text) {
        if (!uniqChars.includes(char)) {
            uniqChars.push(char);
        }
    }

    return uniqChars.length;
};
const text = 'Fear cuts deeper than swords.';
console.log(countUniqChars(text));
*/

/*
// Сортировка массива методом пузырька. Алгоритм ниже можно оптимизировать, если добавить уменьшение для arr.length с каждой итерацией на -1, тк больший элемент уже в конце массива (я лично в этом сомневаюсь, но так написано на хекслете.
const bubbleSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
let arr = [3, 2, 10, -2, 0];
console.log(bubbleSort(arr));
 */

/*
//сложно. выпрамление массива с использованием оператора spread, циклом while с перекопирование массивов
let array = [1, [[2], [3]], [9]];
const flatten = (array) => {
        let result = [];
        let spreaded = false;
        do {
            spreaded = false;
            for (let item of array) {
                if (item.length === undefined) {
                    result.push(item);
                } else {
                    result.push(...item);
                    spreaded = true;
                }
            }
            array = [...result];
            result = [];
        } while (spreaded);
    return array;
};
console.log(flatten(array)); //[ 1, 2, 3, 9 ]

// а ниже решение для хекслета с выпрямлением не до конца...
let array = [1, [[2], [3]], [9]];
const flatten = (array) => {
  let result = [];
  for (let item of array) {
    if (item.length === undefined) {
      result.push(item);
    } else {
      result.push(...item);
    }
  }
  return result;
};
console.log(flatten(array)); //[1, [2], [3], 9]

//решение учителя
const flatten = (coll) => {
  let result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result = [...result, item];
    }
  }
  return result;
};
 */

/*
//треугольник паскаля, генерация определенной линии треугольника
const getNextLineOfPascalTriangle = (array) => {
  let nextArray = [];
  nextArray.push(1);
  for (let i = 1; i < array.length; i++) {
    nextArray.push(array[i - 1] + array[i]);
  };
  nextArray.push(1);
  return nextArray;
};
const generate = (index = 4) => {
  if (index < 0) {
    return 'Wrong parametr'
  };
  if (index === 0) {
    return [1];
  };
  if (index === 1) {
    return [1, 1];
  }
  if (index > 1) {
    let tempArray = [];
    let resultArray = [];
    let firstArray = [1, 1];
    tempArray = firstArray;
    for (let i = 2; i <= index; i++) {
      resultArray = getNextLineOfPascalTriangle(tempArray);
      tempArray = resultArray;
    }
    return resultArray;
  }
}
console.log(generate(4));
//0// 1
//1// 1 1
//2// 1 2 1
//3// 1 3 3 1
//4// 1 4 6 4 1
 */

/*
//сравнение версий
//гениальное решение
const versionComparision = (version1, version2) => {
    const [a1, a2] = version1.split('.');
    const [b1, b2] = version2.split('.');
    const major = Math.sign(a1 - b1);
    const minor = Math.sign(a2 - b2);
    return major === 0 ? minor : major;
}
console.log(versionComparision('10.2', '2.12'));
 */

/*
//поиск последовательности в массиве
const summaryRanges = (array) => {
    let startItem = array[0];
    let continuing = false;
    let result = [];
    if (array.length <= 1) {
        return result;
    }
    for (let i = 1; i <= array.length; i++) {
        if (array[i - 1] + 1 === array[i]) {
            continuing = true;
        } else {
            if (continuing === true) {
                result.push(`${startItem}->${array[i - 1]}`);
                continuing = false;
            }
            startItem = array[i];
        }
    }
    return result;
}
console.log(summaryRanges([1, 2, 3]));
// ['110->112', '-5->-4']
 */

/*
//поиск длины максимальной последовательности в строке
const createArrayOfUnicSequence = (text) => {
    let result = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text[i]);
        for (let i2 = i + 1; i2 < text.length; i2++) {
            if (result[i].indexOf(text[i2]) === -1) {
                result[i] += text[i2]
            } else {
                break
            }
        }
    }
    return result;
}
const getMaxLengthOfItemInArray = (array) => {
    if (array.length === 0) {
        return 0;
    }
    let max = array[0].length;
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > max) {
            max = array[i].length;
        }
    }
    return max;
}
const getLongestLength = (text) => getMaxLengthOfItemInArray(createArrayOfUnicSequence(text));
console.log(getLongestLength('abcdeef'));
//getLongestLength('abcdeef'); // 5
//getLongestLength('jabjcdel'); // 7
//getLongestLength(''); // 0
 */

/*
//польская математика
let operators = ['+', '-', '*', '/'];
const polishMath = (a, b, operator) => {
    if (operator === '*') {
        return a * b;
    };
    if (operator === '/') {
        if (b === 0) {
            return null
        };
        return a / b;
    };
    if (operator === '+') {
        return a + b;
    };
    if (operator === '-') {
        return a - b;
    };
}
const onePolishStep = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (operators.includes(arr[i])) {
            let [a, b, operator] = [arr[i - 2], arr[i - 1], arr[i]];
            if (polishMath(a, b, operator) === null) {
                return null
            }
            arr.splice(i - 2, 3, polishMath(a, b, operator));
            break;
        };
    };
};
const solution = (arr) => {
    do {
        if (onePolishStep(arr) === null) {
            return null;
        };
    } while (arr.length > 1);
    return arr[0];
}
console.log(solution([1, 2, '+', 4, '*', 3, '+']));
 */

/*
//чанк чанкование массива
export default (arr, size) => {
    const nArr = [];
    for (let i = 0; i < arr.length; i += size) {
        nArr.push(arr.slice(i, i + size));
    }
    return nArr;
};
 */

/*
//поворот матрицы вращение
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
];
const rotateLeft = (matrix) => {
    let result = [];
    let lineOfNewMatrix = [];
    for (let i = matrix[0].length - 1; i >= 0 ; i--) {
        for (let i2 = 0; i2 < matrix.length; i2++) {
            lineOfNewMatrix.push(matrix[i2][i]);
        };
        result.push(lineOfNewMatrix);
        lineOfNewMatrix= [];
    };
    return result;
};
const rotateRight = (matrix) => {
    let result = [];
    let lineOfNewMatrix = [];
    for (let i = 0; i < matrix[0].length ; i++) {
        for (let i2 = matrix.length - 1; i2 >= 0; i2--) {
            lineOfNewMatrix.push(matrix[i2][i]);
        };
        result.push(lineOfNewMatrix);
        lineOfNewMatrix= [];
    };
    return result;
};
console.log(rotateRight(matrix))
 */

/*
//сумма интервалов не пересекающихся последовательностей массив марица
let matrix = [
    [1, 2],
    [11, 12],
 ];
const getIntervalLength = (arr) => {
    const [a, b] = arr;
    return b - a;
};

const checkIntersection = (arr1, arr2) => arr2[0] < arr1[1] && arr2[1] > arr1[0] ? true : false;
const getArrayOfIntersectedMatrixIndexes = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let i2 = i + 1; i2 < matrix.length; i2++) {
            if (checkIntersection(matrix[i], matrix[i2])) {
                result.push(i);
                result.push(i2);
            };
        };
    };
    result.sort((a,b) => a - b);
    return [...new Set(result)];
};
const sumIntervals = (matrix) => {
    let intersectedArrays = [];
    let arrayOfIntersectedMatrixIndexes = getArrayOfIntersectedMatrixIndexes(matrix);
    let sumIntervals = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (arrayOfIntersectedMatrixIndexes.includes(i)) {
            intersectedArrays.push(matrix[i][0]);
            intersectedArrays.push(matrix[i][1]);
        } else {
            sumIntervals += getIntervalLength(matrix[i]);
        };
    };
    intersectedArrays.sort((a, b) => a - b);
    if (intersectedArrays.length !== 0) {
        sumIntervals += getIntervalLength([intersectedArrays[0], intersectedArrays[intersectedArrays.length - 1]]);
    };
    return sumIntervals;
};
console.log(sumIntervals(matrix));
//решение учителя
const sumIntervals = (intervals) => {
    const values = [];
    for (const [start, end] of intervals) {
      for (let i = start; i < end; i += 1) {
        if (!values.includes(i)) {
          values.push(i);
        }
      }
    }
    return values.length;
  };
  */

/*
//перемножение умножение матриц
const matrixA = [
    [2, 5],
    [6, 7],
    [1, 8],
  ];
const matrixB = [
    [1, 2, 1],
    [0, 1, 0],
  ];
const matrixMultiply = (matrixA, matrixB) => {
    let matrixC = [];
    let matrixCRow = [];
    const elem = (i, i2) => {
        let result = 0;
        for (let i3 = 0; i3 < matrixB.length; i3++) {
            result += matrixA[i][i3] * matrixB[i3][i2]
        };
        return result;
    };
    for (let i = 0; i < matrixA.length; i++) {
        for (let i2 = 0; i2 < matrixB[0].length; i2++) {
            matrixCRow.push(elem(i, i2));
        };
        matrixC.push(matrixCRow);
        matrixCRow = [];
    };
    return matrixC;
};
console.log(matrixMultiply(matrixA, matrixB));
*/

/*
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

const rotateLeft = (matrix) => {
    let result = [];
    let lineOfNewMatrix = [];
    for (let i = matrix[0].length - 1; i >= 0; i--) {
        for (let i2 = 0; i2 < matrix.length; i2++) {
            lineOfNewMatrix.push(matrix[i2][i]);
        };
        result.push(lineOfNewMatrix);
        lineOfNewMatrix = [];
    };
    return result;
};

const snake = (matrix) => {
    let result = [];
    do {
        if (matrix.length === 1) {
            for (let i = 0; i < matrix[0].length; i++) {
                result.push(matrix[0][i]);
            };
            matrix.splice(0, matrix.length);
        };
        if (matrix.length > 1) {
            for (let i = 0; i < matrix[0].length; i++) {
                result.push(matrix[0][i]);
            };
            matrix.splice(0, 1);
            matrix = rotateLeft(matrix);
        };
    } while (matrix.length > 0);
    return result;
};

console.log(snake(matrix))
 */

/*
console.log(matrix)
matrix.splice(0, 1)
console.log(matrix)
matrix = rotateLeft(matrix)
console.log(matrix)
matrix.splice(0, 1)
console.log(matrix)
matrix = rotateLeft(matrix)
console.log(matrix)
matrix.splice(0, 1)
console.log(matrix.length)
 */

/*
// Обход объекта
const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};
const pick = (obj, searchingKeys) => {
    const result = {};
    const arrayFromObj = Object.entries(obj);
    for (const [key, value] of arrayFromObj) {
        if (searchingKeys.includes(key)) {
            result[key] = value;
        }
    }
    return result;
}
console.log(pick(data, ['user'])); // { user: 'ubuntu' }
 */

/*
// проверка наличия ключей в объекте и возврат из значений с любого уровня вложенности
const data = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};
const getValue = (data, keys) => {
    let result = data?.[keys[0]] ?? 'null';
    for (let i = 1; i < keys.length; i += 1) {
        result = result?.[keys[i]] ?? 'null';
    }
    return result;
}
console.log(getValue(data, [null]));
 */

/*
// Добавить в объект данные из другого объекта по списку ключей
import _ from 'lodash';
// BEGIN
export default (object, keys, data) => {
    const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
    Object.assign(object, filteredData);
};
// END
 */

/*
// функция глубокого или полного копирования объекта с использованием рекурсии
const cloneDeep = (object) => {
    const clonedObject = {};
    for (const [key, value] of Object.entries(object)) {
        if (isObject(value)) {
            clonedObject[key] = cloneDeep(value);
        } else {
            clonedObject[key] = value;
        }
    }
    return clonedObject;
}
 */

/*
// Обход и возврат свойств и значений объекта
const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];
const getSortedNames = (users) => {
    let names = [];
    for (const {name, ...rest} of users) {
        names.push(name);
    }
    return names.sort();
};
console.log(getSortedNames(users));
*/

/*
// Простое число, определение простого числа
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const sayPrimeOrNot = (num) => {
    const text = isPrime(num) ? 'yes' : 'no';
    console.log(text);
};

export default sayPrimeOrNot;
 */

/*
// редьюс фильтрация вывод сортировка по ключу
const students = [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
    { name: 'Taywin', class: 'A', mark: 5 },
];
const groupBy = (arr, key) => {
    return arr.reduce((acc, item) => {
        if (!Object.hasOwnProperty.bind(acc)(item[key])) {
            acc[item[key]] = [];
        }
        acc[item[key]].push(item);
        return acc;
    }, {});
};
console.log(groupBy(students, 'class'));
 */

/*
// подсчет количества емейлов на бесплатных доменах
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
    'ivan@yahoo.com',
];
const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];
const getFreeDomainsCount = (emails) => {
    return freeEmailDomains.reduce((acc, freeEmail) => {
        const count = emails.filter((email) => email.includes(freeEmail)).length;
        if (count > 0) {
            acc[freeEmail] = count;
        }
        return acc;
    }, {});
};
console.log(getFreeDomainsCount(emails));
 */

/*
// получение элементов с первого уровня дерева
const tree1 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
const result = tree1.reduce((acc, item) => {
    if (item.length !== undefined) {
        for (const x of item) {
            acc.push(x);
        }
    }
    return acc;
}, []);
console.log('Result:');
console.log(result); // [1, [3, 2], 3, 5]

// решение учителя
export default (tree) => {
    const nodes = tree.filter(Array.isArray);
    return nodes.flat();
};
 */

/*
// функция глубокого или полного копирования объекта с использованием рекурсии
const cloneDeep = (object) => {
    const clonedObject = {};
    for (const [key, value] of Object.entries(object)) {
        if (isObject(value)) {
            clonedObject[key] = cloneDeep(value);
        } else {
            clonedObject[key] = value;
        }
    }
    return clonedObject;
}
 */

/*
// контекст, инкапсуляция, объект, метод, метод в объекте
const make = (numer, denom) => {
    const obj = {
        numer,
        denom,
      setNumer(numer) {
        this.numer = numer;
      },
      setDenom(denom) {
        this.denom = denom;
      },
      getNumer() {
        return this.numer;
      },
      getDenom() {
        return this.denom;
      },
      add(obj) {
        const numer = this.numer * obj.denom + this.denom * obj.numer;
        const denom = this.denom * obj.denom;
        return make(numer, denom);
      },
      toString() {
        return `${this.numer}/${this.denom}`;
      }
    };
    return obj;
}
const rat1 = make(3, 8);
console.log(rat1)
console.log(rat1.getNumer())
console.log(rat1.getDenom())
console.log(rat1.toString())
const rat2 = make();
rat2.setNumer(10);
rat2.setDenom(3);
console.log(rat2);
*/

/*
// игры с контекстом

const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fn2 = function fn(number1, number2) {
    return number1 + this.number - number2;
};

const binder = (obj, fn) => {
    obj.func = fn;
    //return (args) => obj.func(args);
    //return (args) => obj.func.call(obj, args)
    return function () {
        return obj.func.call(obj, ...arguments)
    }
}

const fnWithContext = binder(obj, fn2);

console.log(fnWithContext(3, 1))

function func1() {
    console.log(...arguments);
  }
//func1(1, 2)
*/


/*
//конструктор

import Point from './Point.js';
import Segment from './Segment.js';

function reverse(segment) {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEngPoint();
    const beginX = beginPoint.getX();
    const beginY = beginPoint.getY();
    const endX = endPoint.getX();
    const endY = endPoint.getY();
    const newBegin = new Point(endX, endY);
    const newEnd = new Point(beginX, beginY);
    const reversedSegment = new Segment(newBegin, newEnd);
    return reversedSegment;
}

  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  const segment = new Segment(point1, point2);
  const reversedSegment = reverse(segment);
*/

/*
// магическая функция
const magic = (...numbers) => {
    const sum = numbers.reduce((acc, x) => (x + acc), 0);
    const inner = (...rest) => magic(sum, ...rest);
    // функции - это объекты, что позволяет для "магического" метода установить свою функцию
    inner.valueOf = () => sum; // метод вызывается при сравнении, поэтому он возвращает только результат
    // подробнее о valueOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
    return inner;
  };
 console.log(magic(2,3))
 */

 