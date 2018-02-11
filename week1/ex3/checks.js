// Встроенный в Node.JS модуль для проверок
// var assert = require('assert');

// Подключаем свою функцию
var addTime = require('./index.js');

console.log(addTime(12, 30, 30));
console.log(addTime(23, 59, 31));
console.log(addTime(11, 50, 61));
console.log(addTime(23, 1, 80));

console.info('OK!');
