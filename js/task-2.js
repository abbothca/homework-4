"use strict";

// Вхідні дані
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;
// Додаткова змінна, яка міститиме масив "вирівняний" масив, параметр Infinity забезпечить "вирівнювання" довільногорівня вкладеності
let flattedArray = resultsArray.flat(Infinity);


console.log("resultsArray : ", resultsArray);
console.log("flattedArray : ", flattedArray);

// Перед обчисленням присвоїмо значення 1 змінній, яка міститиме добуток
productOfArray = 1;
// Вибрала цикл for .. of, оскільки нема потреби знати індекс кожного з елементів
for (let item of flattedArray) {
    productOfArray *= item;
}

console.log("productOfArray : ", productOfArray); // 24