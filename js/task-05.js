// Напишіть функцію each(array, callback), яка першим параметром приймає масив,
//     а другим - функцію, яка буде застосована до кожного елемента масиву.
//     Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback
// callback повинна помножувати елементи на 2
const arrayNumber = [3, 5, 6, 34, 8, 83, 12, 34];
function each(array, callback) {
  return array.map((item) => callback(item));
}
function mult(el) {
  return el * 2;
}
console.log(each(arrayNumber, mult));
