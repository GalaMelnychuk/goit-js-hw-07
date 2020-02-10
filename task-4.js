"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

const clickValue = document.querySelector("#value");
let counterValue = 0;

function handleClickDecrement(event) {
  clickValue.textContent = counterValue -= 1;
}
function handleClickIncrement(event) {
  clickValue.textContent = counterValue += 1;
}

buttonDecrement.addEventListener("click", handleClickDecrement);

buttonIncrement.addEventListener("click", handleClickIncrement);