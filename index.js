/*
Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}



Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/

// Task1
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
if (num1 <= 1) {
  console.log(`Первое число - ${num1} и оно меньше или равно 1`);
} else {
  console.log(`Первое число - ${num1} и оно больше 1`);
}

if (num2 >= 1) {
  console.log(`Второе число - ${num2} и оно больше или равно 3`);
} else {
  console.log(`Второе число - ${num2} и оно меньше 3`);
}

// Task2
let test = true;
test === true ? console.log("+++") : console.log("---");

// Task3
let day = Number(prompt("Введите числом любой день в месяце"));

if (0 < day && day < 11) {
  console.log("Вы вели число в месяце из первой декады");
} else if (10 < day && day < 21) {
  console.log("Вы вели число в месяце из второй декады");
} else if (20 < day && day < 32) {
  console.log("Вы вели число в месяце из третей декады");
} else {
  console.log("Введите число заново, входящее в месяц!");
}
