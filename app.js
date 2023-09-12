const buttons = document.querySelector(".box-buttons");
const buttonsMain = document.querySelector(".box-buttons-main");
const clean = document.querySelector(".claen");
const totalSum = document.querySelector(".total-sum");
const totalExpression = document.querySelector(".total-expression");

let sum = 0;
let expression = "";
let show = 0;

function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}

buttonsMain.addEventListener("click", (event) => {
  if (event.target.classList.contains("clean")) {
    expression = "";
    sum = 0;
    show = sum;
  }
  if (event.target.classList.contains("equal")) {
    sum = parse(expression);
    show = sum;
  }
  totalSum.innerHTML = show;
  totalExpression.innerHTML = expression;
});
buttons.addEventListener("click", (event) => {
  show = event.target.value;
  expression = expression + event.target.value;
  totalSum.innerHTML = show;
  totalExpression.innerHTML = expression;
});
