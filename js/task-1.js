"use strict";


// Блок оголошення констант і змінних
const currentMaxValue = 4589;
let reverseMaxValue;

// Виводимо початкове значення в консоль
console.log("До перетворень currentMaxValue : ", currentMaxValue);


reverseMaxValue = +currentMaxValue.toString().split("").reverse().join("");
// .toString() - перетворюємо в рядковий тип даних, повертає рядок, над яким можемо робити пертвореня далі в ланцюжок, не хвилюючись, що змінимо початкові дані (навіть якби там було не const, а let)
// .split("") - переводимо отриманий на попередньому кроці рядок у масив, використовуючи як розділювач порожній рядок (фактично посимвольно)
// .reverse() - метод, що перетасовує елементи масиву в зворотньому порядку
// .join("") - об'єднуємо елементи масиву в рядок, використовуючи як розділювач порожній рядок
// + напочатку ланцюжка перетворень перетворює отримане значення в тип даних Number

// Виводимо усі значення після перетворень
console.log("Після перетворень currentMaxValue : ", currentMaxValue);
console.log("Після перетворень reverseMaxValue : ", reverseMaxValue); // 9854
console.log("Після перетворень typeof reverseMaxValue : ", typeof reverseMaxValue); // 'number'
