// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  return (newPass) => newPass === password;
}

const passwords = savePassword("qwerty");

console.log(passwords("qwerty"));
console.log(passwords("qwer"));
