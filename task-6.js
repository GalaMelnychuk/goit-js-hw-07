"use strict";
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

{
  /* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов"/> */
}

const input = document.querySelector("#validation-input");
input.classList.add("invalid");
function handleInput(event) {
  if (input.value.length >= 6) {
    input.classList.replace("invalid", "valid");
  } else if (input.value.length < 6) {
    input.classList.replace("valid", "invalid");
  }
}

input.addEventListener("change", handleInput);

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// const text = document.querySelector("#text");
// const fontSizeControl = document.querySelector("#font-size-control");
// console.log(fontSizeControl.style.fontSize);

// function rangeFontSize(event) {
//   text.style.fontSize = fontSizeControl.value + "px";
// }

// fontSizeControl.addEventListener("input", rangeFontSize);
