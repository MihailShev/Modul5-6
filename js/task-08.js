// Напишіть функцію для зберігання знижки.
// Функція повертає іншу функцію, яка приймає суму покупки
// та повертає фінальну суму зі збереженою знижкою

function saleName(sale) {
  return (sumBye) => sumBye - sumBye * (sale / 100);
}

const disc20 = saleName(20);
const disk17 = saleName(17);
console.log(disk17(30));
console.log(disc20(30));
