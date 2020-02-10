"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const text = document.querySelector("#text");
const fontSizeControl = document.querySelector("#font-size-control");

function rangeFontSize(event) {
  console.dir(fontSizeControl);
  console.log(fontSizeControl.value);
  text.style.fontSize = fontSizeControl.value + "px";
}

fontSizeControl.addEventListener("input", rangeFontSize);
