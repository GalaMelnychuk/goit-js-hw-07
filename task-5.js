"use strict";
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector("#name-input");
const nameOuput = document.querySelector("#name-output");

function handleInput(event) {
  if (nameInput.value === "") {
    nameOuput.textContent = "незнакомец";
  } else {
    nameOuput.textContent = nameInput.value;
  }
}

nameInput.addEventListener("input", handleInput);