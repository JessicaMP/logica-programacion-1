const prompt = require("prompt-sync")();

const MESSAGES = {
  first: "Write a random number",
  second: "Write another random number",
  thrid: "Write last random number",
  extra: "(please only numbers)",
};

const isValidNumber = (value) => value.trim() !== "" && !isNaN(Number(value));

const quizAndGetNumber = (message) => {
  let num = prompt(`${message}: `);

  while (!isValidNumber(num)) {
    num = prompt(`${message} ${MESSAGES.extra}: `);
  }
  return Number(num);
};

const allNumbersIsEqual = (list) => list.every((item) => item === list[0]);

const getNumbers = () => {
  const numbers = [];

  /* First Number */
  numbers.push(quizAndGetNumber(MESSAGES.first));
  /* Second Number */
  numbers.push(quizAndGetNumber(MESSAGES.second));
  /* Last Number */
  numbers.push(quizAndGetNumber(MESSAGES.thrid));

  if (allNumbersIsEqual(numbers) === true) return `All numbers is equal (${numbers[0]})`;
  //   const sorted = numbers.sort((a, b) => a - b);
  const numbersAsc = numbers.sort((a, b) => a - b).join(', ');
  const numbersDesc = numbers.sort((a, b) => b - a).join(', ');

  return `Numbers Desc: ${numbersDesc}\nNumbers Asc: ${numbersAsc}\n`;
};

console.log(getNumbers());
