// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan
phoneBook('ADD Ivan 555-10-01,555-10-13');
phoneBook('ADD Ivan 555-10-02');
phoneBook('ADD Alex 555-12-02');
phoneBook('REMOVE_PHONE 555-12-02');
phoneBook('ADD Anton 555-1444-02');
phoneBook('ADD Andrey 444-10-02');
phoneBook('REMOVE_PHONE 444-10-02');
phoneBook('ADD Petya 111-10-02');

// Проверка работы функции SHOW
// assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
//     [
//         'Ivan: 555-10-01, 555-10-03, 555-10-02'
//     ],
//     'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
// );

// Проверка работы функции REMOVE_PHONE
//assert.equal(
    // Удаляем телефон 555-10-03
    phoneBook('REMOVE_PHONE 555-10-13'),
   //
// Добавляем новый контакт
phoneBook('ADD Alex 555-20-01');

// Проверка работы функции SHOW
// assert.deepEqual(
//     // Получаем содержимое телефонной книги
//     phoneBook('SHOW'),
//     [
//         'Alex: 555-20-01',
//         'Ivan: 555-10-01, 555-10-02'
//     ],
//     'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
// );

// Удаляем телефон
phoneBook('REMOVE_PHONE 555-20-01');

// // Проверка работы функции SHOW
// assert.deepEqual(
//     // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
//     [
//         'Ivan: 555-10-01, 555-10-02'
//     ],
//     'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
// );

console.info('OK!');
