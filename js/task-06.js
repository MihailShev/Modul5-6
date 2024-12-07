// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів

function makeCounter(count) {
  return () => (count += 1);
}

const karentCount = makeCounter(3);

console.log(karentCount());
console.log(karentCount());
console.log(karentCount());
console.log(karentCount());
console.log(karentCount());
console.log(karentCount());
console.log(karentCount());
