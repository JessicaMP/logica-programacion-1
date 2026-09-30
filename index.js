/* Version Web */

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

const changeTextBtn = () => {
  document.querySelector(".btn-text").innerText = "Try again!";
};

const reset = () => {
  const content = document.getElementById("content");
  content.classList.add("hidden");

  const info = document.getElementById("information");
  if (!info) return;
  info.replaceChildren();
};

const allNumbersIsEqual = (list) => list.every((item) => item === list[0]);

const createParagraph = (text) => {
  const newElement = document.createElement("p");
  const newContent = document.createTextNode(text);
  newElement.appendChild(newContent);
  const info = document.getElementById("information");
  if (!info) return;
  info.appendChild(newElement);
};

const getNumbers = () => {
  reset();
  const numbers = [];

  /* First Number */
  numbers.push(quizAndGetNumber(MESSAGES.first));
  /* Second Number */
  numbers.push(quizAndGetNumber(MESSAGES.second));
  /* Last Number */
  numbers.push(quizAndGetNumber(MESSAGES.thrid));

  const content = document.getElementById("content");
  content.classList.remove("hidden");

  if (allNumbersIsEqual(numbers) === true) {
    createParagraph(`All numbers is equal (${numbers[0]})`);
    changeTextBtn();
    return;
  }

  const numbersAsc = numbers.sort((a, b) => a - b).join(", ");
  const numbersDesc = numbers.sort((a, b) => b - a).join(", ");

  createParagraph(`Numbers Desc: ${numbersDesc}`);
  createParagraph(`Numbers Desc: ${numbersAsc}`);
  changeTextBtn();
};
